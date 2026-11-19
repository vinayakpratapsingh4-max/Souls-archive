
const STEAM_APP_IDS = new Set([
  "1245620", "570940", "335300", "374320",
  "814380", "1888160", "2358720", "1627720",
  "1501750", "1325200", "1448440", "367520",
  "1030300", "1809540"
]);

const ALLOWED_ORIGIN = "https://souls-archive.embarko.app";

function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

export async function onRequest({ request, params }) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400"
      }
    });
  }

  if (request.method !== "GET") {
    return json({ error: "Method not allowed" }, 405);
  }

  const appid = String(params.appid || "");

  if (!STEAM_APP_IDS.has(appid)) {
    return json({ error: "Game not supported" }, 404);
  }

  try {
    const response = await fetch(
      `https://store.steampowered.com/api/appdetails?appids=${appid}&cc=in`,
      {
        cf: {
          cacheTtl: 3600,
          cacheEverything: true
        }
      }
    );

    if (!response.ok) {
      throw new Error("Steam request failed");
    }

    const result = await response.json();
    const game = result[appid];

    if (!game?.success || !game.data) {
      return json({ error: "Steam data unavailable" }, 404);
    }

    const data = game.data;
    const price = data.price_overview;

    const movies = [
      ...(data.detailed_description || "").matchAll(
        /<video\b([^>]*)>([\s\S]*?)<\/video>/gi
      )
    ].map(match => {
      const poster = match[1].match(/\bposter=["']([^"']+)["']/i);
      const sources = [...match[2].matchAll(/<source\b([^>]*)>/gi)];

      const getSource = type => {
        const source = sources.find(s =>
          new RegExp(`type=["']video/${type}`, "i").test(s[1])
        );

        return source?.[1].match(/\bsrc=["']([^"']+)["']/i)?.[1] || null;
      };

      return {
        name: "Steam Game Trailer",
        thumbnail: poster?.[1] || "",
        mp4: getSource("mp4"),
        webm: getSource("webm")
      };
    }).filter(movie => movie.mp4 || movie.webm);

    return json({
      available: !!price,
      message: price ? undefined : "No price currently listed",
      currency: price?.currency,
      initial: price?.initial,
      final: price?.final,
      discountPercent: price?.discount_percent,
      originalFormatted: price?.initial_formatted,
      finalFormatted: price?.final_formatted,
      storeUrl: `https://store.steampowered.com/app/${appid}/`,
      screenshots: (data.screenshots || []).map(shot => ({
        thumbnail: shot.path_thumbnail,
        full: shot.path_full
      })),
      movies
    });

  } catch (error) {
    return json({ error: "Unable to fetch Steam data" }, 502);
  }
}
