

const STEAM_APP_IDS = new Set([
  "1245620", "570940", "335300", "374320",
  "814380", "1888160", "2358720", "1627720",
  "1501750", "1325200", "1448440", "367520",
  "1030300", "1809540"
]);

export async function onRequest({ params }) {
  const appid = String(params.appid);

  if (!STEAM_APP_IDS.has(appid)) {
    return Response.json(
      { error: "Game not supported" },
      { status: 404 }
    );
  }

  const url =
    `https://store.steampowered.com/api/appdetails` +
    `?appids=${appid}&cc=in`;

  try {
    const response = await fetch(url, {
      cf: {
        cacheTtl: 3600,
        cacheEverything: true
      }
    });

    if (!response.ok) {
      throw new Error("Steam request failed");
    }

    const result = await response.json();
    const game = result[appid];

    if (!game || !game.success || !game.data) {
      return Response.json(
        { error: "Steam data unavailable" },
        { status: 404 }
      );
    }

    const data = game.data;
    const price = data.price_overview;

    return Response.json({
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
      }))
    }, {
      headers: {
        "Cache-Control": "public, max-age=3600"
      }
    });

  } catch (error) {
    return Response.json(
      { error: "Unable to fetch Steam data" },
      { status: 502 }
    );
  }
}
