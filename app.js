
const games = [
  {id:1,name:"Elden Ring",genre:"Souls",year:2022,studio:"FromSoftware",difficulty:"Hard",platforms:["PC","PS4","PS5","Xbox One","Xbox Series X/S"],description:"ELDEN RING features vast fantastical landscapes and shadowy, complex dungeons that are connected seamlessly. Traverse the breathtaking world on foot or on horseback, alone or online with other players, and fully immerse yourself in the grassy plains, suffocating swamps, spiraling mountains, foreboding castles and other sites of grandeur on a scale never seen before in a FromSoftware title.",image:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",featured:true},
  {id:2,name:"Dark Souls Remastered",genre:"Souls",year:2018,studio:"FromSoftware",difficulty:"Hard",platforms:["PC","PS4","Xbox One","Nintendo Switch"],description:"Return to Lordran in the remastered version of the game that defined a genre.",image:"https://cdn.cloudflare.steamstatic.com/steam/apps/570940/header.jpg",featured:true},

  {id:3,name:"Dark Souls II: Scholar of the First Sin",genre:"Souls",year:2015,studio:"FromSoftware",difficulty:"Very hard",platforms:["PC","PS3","PS4","Xbox 360","Xbox One"],description:"Journey through Drangleic and uncover the mysteries of the cursed kingdom.",image:"https://cdn.cloudflare.steamstatic.com/steam/apps/335300/header.jpg"},

  {id:4,name:"Dark Souls III",genre:"Souls",year:2016,studio:"FromSoftware",difficulty:"Very hard",platforms:["PC","PS4","Xbox One"],description:"A fading kingdom, powerful lords and a haunting dark fantasy adventure.",image:"https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg",featured:true},

  {id:5,name:"Demon's Souls",genre:"Souls",year:2009,studio:"FromSoftware / Bluepoint Games",difficulty:"Very hard",platforms:["PS3","PS5"],description:"Return to Boletaria and face the ancient evil hidden beyond the fog.",image:"https://gmedia.playstation.com/is/image/SIEPDC/demons-soul-hero-02-ps5-en-19aug20?$1600px$",featured:true},
  {id:6,name:"Bloodborne",genre:"Souls",year:2015,studio:"FromSoftware",difficulty:"Hard",platforms:["PS4"],description:"Explore the gothic city of Yharnam and uncover its terrifying secrets.",image:"https://image.api.playstation.com/vulcan/img/rnd/202010/2614/O2Z66UWrZH8zcejxopwWxhGu.png?w=1920",featured:true},

  {id:7,name:"Sekiro: Shadows Die Twice",genre:"Souls",year:2019,studio:"FromSoftware",difficulty:"Very hard",platforms:["PC","PS4","Xbox One"],description:"A shinobi's journey built around precision, timing and intense combat.",image:"https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg",featured:true},

  {id:8,name:"Armored Core VI: Fires of Rubicon",genre:"Action RPG",year:2023,studio:"FromSoftware",difficulty:"Hard",platforms:["PC","PS4","PS5","Xbox One","Xbox Series X/S"],description:"Pilot a customizable mech through a futuristic conflict on Rubicon 3.",image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1888160/header.jpg"},

  {id:9,name:"Black Myth: Wukong",genre:"Soulslike",year:2024,studio:"Game Science",difficulty:"Hard",platforms:["PC","PS5","Xbox Series X/S"],description:"Experience a spectacular action RPG inspired by Journey to the West.",image:"https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg",featured:true},

  {id:10,name:"Lies of P",genre:"Soulslike",year:2023,studio:"NEOWIZ",difficulty:"Hard",platforms:["PC","PS4","PS5","Xbox One","Xbox Series X/S"],description:"A dark reimagining of Pinocchio set in the city of Krat.",image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1627720/header.jpg",featured:true},

  {id:11,name:"Lords of the Fallen",genre:"Soulslike",year:2023,studio:"CI Games",difficulty:"Hard",platforms:["PC","PS5","Xbox Series X/S"],description:"Travel between two parallel realms in a brutal dark fantasy world.",image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1501750/header.jpg"},

  {id:12,name:"Nioh 2",genre:"Soulslike",year:2020,studio:"Team Ninja",difficulty:"Very hard",platforms:["PC","PS4","PS5"],description:"Fight powerful yokai in a challenging samurai action RPG.",image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1325200/header.jpg",featured:true},

  {id:13,name:"Wo Long: Fallen Dynasty",genre:"Soulslike",year:2023,studio:"Team Ninja",difficulty:"Hard",platforms:["PC","PS4","PS5","Xbox One","Xbox Series X/S"],description:"A dark fantasy adventure inspired by the Three Kingdoms era.",image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1448440/header.jpg"},

  {id:14,name:"Hollow Knight",genre:"Metroidvania",year:2017,studio:"Team Cherry",difficulty:"Challenging",platforms:["PC","PS4","Xbox One","Nintendo Switch"],description:"Explore the mysterious underground kingdom of Hallownest.",image:"https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg",featured:true},

  {id:15,name:"Hollow Knight: Silksong",genre:"Metroidvania",year:2025,studio:"Team Cherry",difficulty:"Challenging",platforms:["PC","PS4","PS5","Xbox One","Xbox Series X/S","Nintendo Switch","Nintendo Switch 2"],description:"Play as Hornet and explore the vast kingdom of Pharloom.",image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1030300/header.jpg",featured:true},

  {id:16,name:"Nine Sols",genre:"Metroidvania",year:2024,studio:"Red Candle Games",difficulty:"Hard",platforms:["PC","PS4","PS5","Xbox One","Xbox Series X/S","Nintendo Switch"],description:"A hand-drawn action platformer with deflection-focused combat and science-fantasy lore.",image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1809540/header.jpg"}
  ];

const gameDetails = {
  1: {
    min: "OS: Windows 10 | CPU: Intel Core i5-8400 / Ryzen 3 3300X | RAM: 12 GB | GPU: GTX 1060 3GB / RX 580 4GB | DirectX 12 | Storage: 60 GB",
    rec: "OS: Windows 10/11 | CPU: Intel Core i7-8700K / Ryzen 5 3600X | RAM: 16 GB | GPU: GTX 1070 8GB / RX Vega 56 8GB | DirectX 12 | Storage: 60 GB"
  },
  2: {
    min: "OS: Windows 7 64-bit | CPU: Intel Core i5-2300 / AMD FX-6300 | RAM: 6 GB | GPU: GTX 460 / Radeon HD 6870 | DirectX 11 | Storage: 8 GB",
    rec: "OS: Windows 10 64-bit | CPU: Intel Core i5-4570 / AMD FX-6300 | RAM: 8 GB | GPU: GTX 660 / Radeon HD 7870 | DirectX 11 | Storage: 8 GB"
  },
  3: {
    min: "OS: Windows 7 SP1 64-bit | CPU: Intel Core i3-2100 / AMD A8 3870 | RAM: 4 GB | GPU: GTX 465 / Radeon HD 6870 | DirectX 11 | Storage: 23 GB",
    rec: "OS: Windows 7 SP1 64-bit | CPU: Intel Core i7-2600 / AMD FX-8150 | RAM: 8 GB | GPU: GTX 750 / Radeon HD 7850 | DirectX 11 | Storage: 23 GB"
  },
  4: {
    min: "OS: Windows 7 64-bit | CPU: Intel Core i3-2100 / AMD FX-6300 | RAM: 4 GB | GPU: GTX 750 Ti / Radeon HD 7950 | DirectX 11 | Storage: 25 GB",
    rec: "OS: Windows 7 64-bit | CPU: Intel Core i7-3770 / AMD FX-8350 | RAM: 8 GB | GPU: GTX 970 / Radeon R9 series | DirectX 11 | Storage: 25 GB"
  },
  5: {
    min: "No official PC version or published PC requirements.",
    rec: "Available on PlayStation 3 and PlayStation 5."
  },
  6: {
    min: "No official PC version or published PC requirements.",
    rec: "Available on PlayStation 4."
  },
  7: {
    min: "OS: Windows 7 64-bit | CPU: Intel Core i3-2100 / AMD FX-6300 | RAM: 4 GB | GPU: GTX 760 / Radeon HD 7950 | DirectX 11 | Storage: 25 GB",
    rec: "OS: Windows 7 64-bit | CPU: Intel Core i5-2500K / AMD FX-6300 | RAM: 8 GB | GPU: GTX 970 / Radeon RX 570 | DirectX 11 | Storage: 25 GB"
  },
  8: {
    min: "OS: Windows 10 | CPU: Intel Core i5-8600K / Ryzen 3 3300X | RAM: 12 GB | GPU: GTX 960 / Radeon RX 480 | DirectX 12 | Storage: 60 GB",
    rec: "OS: Windows 10 | CPU: Intel Core i7-7700 / Ryzen 5 2600 | RAM: 12 GB | GPU: GTX 1060 / Radeon RX 590 | DirectX 12 | Storage: 60 GB"
  },
  9: {
    min: "OS: Windows 10 64-bit | CPU: Intel Core i5-8400 / Ryzen 5 1600 | RAM: 16 GB | GPU: GTX 1060 6GB / RX 580 8GB | DirectX 11 | Storage: 130 GB",
    rec: "OS: Windows 10 64-bit | CPU: Intel Core i7-9700 / Ryzen 5 5500 | RAM: 16 GB | GPU: RTX 2060 / RX 5700 XT | DirectX 12 | Storage: 130 GB SSD"
  },
  10: {
    min: "OS: Windows 10 64-bit | CPU: Intel Core i3-6300 / Ryzen 3 1200 | RAM: 8 GB | GPU: GTX 960 4GB / RX 560 4GB | DirectX 12 | Storage: 50 GB",
    rec: "OS: Windows 10 64-bit | CPU: Intel Core i3-6300 / Ryzen 3 1200 | RAM: 16 GB | GPU: GTX 1660 6GB / RX 6500 XT 4GB | DirectX 12 | Storage: 50 GB"
  },
  11: {
    min: "OS: Windows 10 64-bit | CPU: Intel Core i5-8400 / Ryzen 5 2600 | RAM: 12 GB | GPU: GTX 1060 6GB / RX 590 | DirectX 12 | Storage: 45 GB",
    rec: "OS: Windows 10 64-bit | CPU: Intel Core i7-8700 / Ryzen 5 3600 | RAM: 16 GB | GPU: RTX 2080 / RX 6700 | DirectX 12 | Storage: 45 GB SSD"
  },
  12: {
    min: "OS: Windows 10 64-bit | CPU: Intel Core i5-4460 | RAM: 6 GB | GPU: GTX 970 / GTX 1650 | DirectX 11 | Storage: 85 GB",
    rec: "OS: Windows 10 64-bit | CPU: Intel Core i7-6700 | RAM: 16 GB | GPU: GTX 1660 SUPER | DirectX 11 | Storage: 85 GB"
  },
  13: {
    min: "OS: Windows 10/11 64-bit | CPU: Intel Core i5-8400 / Ryzen 5 3400G | RAM: 8 GB | GPU: GTX 1650 4GB / RX 570 4GB | DirectX 12 | Storage: 60 GB",
    rec: "OS: Windows 10/11 64-bit | CPU: Intel Core i7-8700 / Ryzen 5 3600XT | RAM: 16 GB | GPU: RTX 2060 6GB / RX 5700 XT 8GB | DirectX 12 | Storage: 60 GB"
  },
  14: {
    min: "OS: Windows 7 64-bit | CPU: Intel Core 2 Duo E5200 | RAM: 4 GB | GPU: GeForce 9800GTX+ / Radeon HD 4890 | DirectX 10 | Storage: 9 GB",
    rec: "OS: Windows 10 64-bit | CPU: Intel Core i5 | RAM: 8 GB | GPU: GTX 560 | DirectX 10 | Storage: 9 GB"
  },
  15: {
    min: "PC version available. Check the current Steam listing for the latest minimum CPU, GPU, RAM and storage requirements.",
    rec: "Check the current Steam listing for recommended hardware."
  },
  16: {
    min: "OS: Windows 10 64-bit | CPU: Intel Core i3-6100 | RAM: 8 GB | GPU: GTX 660 | DirectX 11 | Storage: 5 GB",
    rec: "OS: Windows 10 64-bit | CPU: Intel Core i5-8400 | RAM: 16 GB | GPU: GTX 970 | DirectX 11 | Storage: 5 GB"
  }
};

const $ = id => document.getElementById(id);
let activeCategory = "All";
let wishlist = JSON.parse(localStorage.getItem("soulsArchiveWishlist") || "[]");
let completedGames = JSON.parse(
  localStorage.getItem("soulsArchiveCompleted") || "[]"
);

function getPlayerRank() {
  const count = completedGames.length;

  if (count >= 14) return "Lord of Cinder";
  if (count >= 10) return "Elden Lord";
  if (count >= 6) return "Hunter";
  if (count >= 3) return "Hollow";
  if (count >= 1) return "Ashen One";

  return "Unranked";
}

function completeGame(id) {
  if (completedGames.includes(id)) {
    notify("Achievement already unlocked!");
    return;
  }

  const game = games.find(g => g.id === id);
  if (!game) return;

  const titles = {
    1: "ELDEN LORD",
    2: "LORD OF THE DARK",
    3: "THRONE SEEKER",
    4: "LORD OF CINDER",
    5: "SLAYER OF DEMONS",
    6: "HUNTER OF NIGHT",
    7: "MASTER OF DEFLECTION",
    8: "RUBICON LIBERATOR",
    9: "DESTINED ONE",
    10: "A REAL BOY",
    11: "BEARER OF THE LAMP",
    12: "YOKAI SLAYER",
    13: "DRAGON WARRIOR",
    14: "KNIGHT OF HALLOWNEST",
    15: "PHARLOOM'S FINEST",
    16: "TAOPUNK ASCENDANT"
  };

  completedGames.push(id);
  localStorage.setItem(
    "soulsArchiveCompleted",
    JSON.stringify(completedGames)
  );

  const popup = document.createElement("div");
  popup.id = "achievement-popup";

  popup.innerHTML = `
    <div style="
      position:relative;
      width:min(90%,420px);
      padding:35px 22px;
      text-align:center;
      background:linear-gradient(#101711ee,#080d09f5),
      url('${game.image}') center/cover;
      border:1px solid #c5a56d;
      box-shadow:0 0 45px #c5a56d44;
    ">
      <div style="font-size:34px;margin-bottom:12px">🏆</div>
      <p style="color:#c5a56d;letter-spacing:4px;font-size:11px">
        ACHIEVEMENT UNLOCKED
      </p>
      <h2 style="color:#e8e2cf;letter-spacing:2px">
        ${titles[id] || "ASHEN VICTORY"}
      </h2>
      <p style="color:#a19f8a">${game.name}</p>
      <button id="close-achievement" style="
        margin-top:20px;padding:12px 25px;
        background:#c5a56d;color:#101711;
        border:0;letter-spacing:2px;font-weight:bold;
      ">CONTINUE</button>
    </div>
  `;

  popup.style.cssText = `
    position:fixed;inset:0;z-index:1000000;
    display:flex;align-items:center;justify-content:center;
    background:#000c;opacity:0;
    transition:opacity .5s ease;
  `;
const AudioContextClass = window.AudioContext || window.webkitAudioContext;
const audioContext = AudioContextClass ? new AudioContextClass() : null;

function playUnlockSound() {
  const now = audioContext.currentTime;

  [220, 330, 440].forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, now + index * 0.16);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.12, now + index * 0.16 + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(now + index * 0.16);
    oscillator.stop(now + 1.8);
  });
}

if (audioContext) {
  audioContext.resume().then(playUnlockSound).catch(() => {});
}
  document.body.appendChild(popup);
  requestAnimationFrame(() => popup.style.opacity = "1");

  document.getElementById("close-achievement").onclick = () => {
    popup.style.opacity = "0";
    setTimeout(() => popup.remove(), 500);
    openGame(id);
  };
}
function renderRankings() {
  const count = completedGames.length;

  const ranks = [
    { name: "Unranked", min: 0 },
    { name: "Ashen One", min: 1 },
    { name: "Hollow", min: 3 },
    { name: "Hunter", min: 6 },
    { name: "Elden Lord", min: 10 },
    { name: "Lord of Cinder", min: 14 }
  ];

  let current = ranks[0];
  let next = null;

  for (let i = 0; i < ranks.length; i++) {
    if (count >= ranks[i].min) current = ranks[i];
    else {
      next = ranks[i];
      break;
    }
  }

  const rankSymbols = {
  "Unranked": "◇",
  "Ashen One": "♨",
  "Hollow": "☽",
  "Hunter": "✦",
  "Elden Lord": "♛",
  "Lord of Cinder": "🔥"
};

$("player-rank").innerHTML =
  `${current.name.toUpperCase()} <span class="rank-symbol">${rankSymbols[current.name]}</span>`;
  $("rank-progress").textContent = next
    ? `${count} / ${next.min} games completed · ${next.min - count} more to ${next.name}`
    : "You have reached the highest rank.";

  $("rank-progress-bar").style.cssText = `
    height:5px;
    margin-top:15px;
    background:#394638;
    width:100%;
    position:relative;
  `;

  $("rank-progress-bar").innerHTML = `
    <div style="
      height:100%;
      width:${next ? Math.min(100, count / next.min * 100) : 100}%;
      background:#c5a56d;
      transition:width .5s;
    "></div>
  `;

  $("completed-count").textContent = count;
  $("achievement-count").textContent = count;

  $("completed-games").innerHTML = completedGames.map(id => {
    const game = games.find(g => g.id === id);
    return game ? `
      <div class="panel">
        <strong>${game.name}</strong>
        <p class="subtle">✓ COMPLETED</p>
      </div>
    ` : "";
  }).join("");

  const titles = {
    1:"ELDEN LORD",
    2:"LORD OF THE DARK",
    3:"THRONE SEEKER",
    4:"LORD OF CINDER",
    5:"SLAYER OF DEMONS",
    6:"HUNTER OF NIGHT",
    7:"MASTER OF DEFLECTION",
    8:"RUBICON LIBERATOR",
    9:"DESTINED ONE",
    10:"A REAL BOY",
    11:"BEARER OF THE LAMP",
    12:"YOKAI SLAYER",
    13:"DRAGON WARRIOR",
    14:"KNIGHT OF HALLOWNEST",
    15:"PHARLOOM'S FINEST",
    16:"TAOPUNK ASCENDANT"
  };

  $("achievement-list").innerHTML = completedGames.map(id => {
    const game = games.find(g => g.id === id);
    if (!game) return "";

    return `
      <div class="panel" style="margin-bottom:12px">
        <p class="eyebrow">🏆 ACHIEVEMENT UNLOCKED</p>
        <h3>${titles[id] || "ASHEN VICTORY"}</h3>
        <p class="subtle">${game.name}</p>
      </div>
    `;
  }).join("");

  $("achievement-empty").hidden = count > 0;
}


function gameCard(game){
  return `<article class="game-card" data-game="${game.id}" tabindex="0" role="button" aria-label="View ${game.name}">
    <div class="game-card-image">
      <img src="${game.image}" alt="${game.name}" loading="lazy">
    </div>
    <div class="game-card-body">
      <div class="game-meta">${game.genre} · ${game.year}</div>
      <div class="game-name">${game.name}</div>
      <div class="game-difficulty">${game.difficulty}</div>
      <div class="game-open">VIEW DETAILS ↗</div>
    </div>
  </article>`;
}


async function animateCardOpen(card, gameId) {
  const curtain = document.createElement("div");

  curtain.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 999999;
    background: #07111e;
    opacity: 0;
    pointer-events: auto;
    transition: opacity 350ms ease;
  `;

  document.body.appendChild(curtain);

  requestAnimationFrame(() => {
    curtain.style.opacity = "1";
  });

  await new Promise(resolve => setTimeout(resolve, 370));

  try {
    openGame(gameId);
  } catch (error) {
    console.error("Game opening error:", error);
    notify("Unable to open game. Check console.");
  }

  curtain.style.transition = "opacity 700ms ease-in-out";
  curtain.style.pointerEvents = "none";

  requestAnimationFrame(() => {
    curtain.style.opacity = "0";
  });

  setTimeout(() => {
    curtain.remove();
  }, 750);
}


function bindCards(root){
  root.querySelectorAll("[data-game]").forEach(card=>{
    const open=()=>animateCardOpen(card,Number(card.dataset.game));
    card.addEventListener("click",open);
    card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open();}});
  });
}
function renderCatalog(){
  const query=$("search-input").value.trim().toLowerCase();
  const matches=games.filter(g=>(activeCategory==="All"||g.genre===activeCategory)&&g.name.toLowerCase().includes(query));
  $("catalog-games").innerHTML=matches.map(gameCard).join("");
  $("empty-state").hidden=matches.length>0;
  $("game-total").textContent=`${matches.length} GAMES`;
  bindCards($("catalog-games"));
}
function renderWishlist(){
  const saved=games.filter(g=>wishlist.includes(g.id));
  $("wishlist-games").innerHTML=saved.map(gameCard).join("");
  $("wishlist-empty").hidden=saved.length>0;
  $("wish-count").textContent=wishlist.length;
  $("about-wishlist-count").textContent=wishlist.length;
  bindCards($("wishlist-games"));
}
function saveWishlist(){
  localStorage.setItem("soulsArchiveWishlist",JSON.stringify(wishlist));
  renderWishlist();
}
function showPage(pageId){
  document.querySelectorAll(".page").forEach(p=>p.hidden=p.id!==pageId);

  document.querySelectorAll(".nav-item").forEach(b=>
    b.classList.toggle("active",b.dataset.page===pageId)
  );

  if(pageId==="wishlist-page") renderWishlist();
  if(pageId==="devices-page") renderDevices();
  if(pageId==="rankings-page") renderRankings();

  window.scrollTo({top:0,behavior:"smooth"});
}
function notify(message){
  const toast=$("toast");toast.textContent=message;toast.classList.add("show");
  clearTimeout(notify.timer);notify.timer=setTimeout(()=>toast.classList.remove("show"),1700);
}

function requirementLines(text) {
  if (!text) return "<p>Not available</p>";

  return text.split("|").map(item =>
    `<p class="requirement-line">${item.trim()}</p>`
  ).join("");
}

function openGame(id) {
  const game = games.find(g => g.id === id);
  if (!game) return;

  const details = (typeof gameDetails !== "undefined" && gameDetails[id]) || {};
  const saved = wishlist.includes(id);
  $("game-detail").innerHTML = `
    <img class="detail-cover" src="${game.image}" alt="${game.name}">

    <div class="detail-kicker eyebrow">${game.genre.toUpperCase()} · ${game.year}</div>
    <h1 class="detail-title">${game.name}</h1>
    <p class="subtle">${game.studio}</p>

    <div class="pills">
      <span class="pill">${game.difficulty}</span>
      <span class="pill">${game.genre}</span>
    </div>

    <section class="detail-section">
      <h3>THE JOURNEY</h3>
      <p class="detail-description">${details.description || game.description}</p>
    </section>
    ${typeof gameMedia !== "undefined" && gameMedia[id]?.trailerId ? `
    <section class="detail-section">
      <h3>OFFICIAL TRAILER</h3>
      <div style="position:relative;width:100%;aspect-ratio:16/9;overflow:hidden;border:1px solid #c5a56d;">
        <iframe
          src="https://www.youtube-nocookie.com/embed/${gameMedia[id].trailerId}"
          title="${game.name} Official Trailer"
          style="width:100%;height:100%;border:0;"
          allowfullscreen
          loading="lazy">
        </iframe>
      </div>
    </section>
    ` : ""}
<section class="detail-section">
  <h3>SCREENSHOTS</h3>
  <div id="game-screenshots"
       style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;">
    <p class="subtle">Loading screenshots...</p>
  </div>
</section>
    <section class="detail-section">
      <h3>PLATFORM AVAILABILITY</h3>
      <div class="pills">
        ${game.platforms.map(p => `<span class="pill">${p}</span>`).join("")}
      </div>
    </section>

    <section class="detail-section">
      <h3>PC SYSTEM REQUIREMENTS</h3>

      <div class="price-box">
        <strong>MINIMUM REQUIREMENTS</strong>
        <div class="requirements-list">
          ${requirementLines(details.min)}
        </div>
      </div>

      <div class="price-box">
        <strong>RECOMMENDED REQUIREMENTS</strong>
        <div class="requirements-list">
          ${requirementLines(details.rec)}
        </div>
      </div>

      <p class="fine-print">
        Actual performance may vary depending on your PC.
      </p>
    </section>

<section class="detail-section">
  <h3>STEAM STORE</h3>
  <div class="price-box" id="steam-price">
    Loading Steam price...
  </div>
</section>

<section class="detail-section">
  <h3>STEAM ACHIEVEMENTS</h3>
  <div class="price-box">
    <p>Discover challenges and milestones for this game.</p>
    <a class="steam-store-button"
       href="${steamAppIds[id] ? `https://steamcommunity.com/stats/${steamAppIds[id]}/achievements/` : '#'}"
       target="_blank"
       rel="noopener noreferrer">
      ${steamAppIds[id] ? "VIEW ACHIEVEMENTS ↗" : "STEAM ACHIEVEMENTS UNAVAILABLE"}
    </a>
  </div>
</section>

<button class="complete-button" id="complete-game">
  ${completedGames.includes(id)
    ? "✓ GAME COMPLETED"
    : "🏆 MARK AS COMPLETED"}
</button>

<button class="save-button" id="save-game">
  ${saved ? "♥ REMOVE FROM WISHLIST" : "♡ ADD TO WISHLIST"}
</button>

    <p class="fine-print">
      Verify platform availability and requirements with the publisher.
    </p>
  `;

  $("save-game").addEventListener("click", () => {
    wishlist = wishlist.includes(id)
      ? wishlist.filter(x => x !== id)
      : [...wishlist, id];

    saveWishlist();
    openGame(id);
    notify(wishlist.includes(id) ? "Added to wishlist" : "Removed from wishlist");
  });
$("complete-game").addEventListener("click", () => {
  completeGame(id);
});

  showPage("detail-page");
  loadSteamPrice(id);
  loadGameScreenshots(id);
}
const steamAppIds = {
  1: "1245620",
  2: "570940",
  3: "335300",
  4: "374320",
  7: "814380",
  8: "1888160",
  9: "2358720",
  10: "1627720",
  11: "1501750",
  12: "1325200",
  13: "1448440",
  14: "367520",
  15: "1030300",
  16: "1809540"
};




async function loadGameScreenshots(id) {
  const box = document.getElementById("game-screenshots");
  if (!box) return;

  const appid = steamAppIds[id];

  if (!appid) {
    box.innerHTML = "<p class='subtle'>Screenshots unavailable.</p>";
    return;
  }

  box.innerHTML = "<p class='subtle'>Loading screenshots...</p>";

  try {
    const response = await fetch(`/api/steam/${appid}`);
    if (!response.ok) throw new Error("API request failed");

    const data = await response.json();
    const shots = (data.screenshots || []).slice(0, 6);

    if (!shots.length) {
      box.innerHTML = "<p class='subtle'>No screenshots available.</p>";
      return;
    }

    box.innerHTML = shots.map((shot, index) => `
      <button class="screenshot-thumb" data-index="${index}">
        <img src="${shot.thumbnail}" alt="Game screenshot" loading="lazy">
      </button>
    `).join("");

    box.querySelectorAll(".screenshot-thumb").forEach(button => {
      button.addEventListener("click", () => {
        let current = Number(button.dataset.index);
        let startX = 0;
        let dragX = 0;
        let dragging = false;

        const viewer = document.createElement("div");
        viewer.className = "screenshot-viewer";

        viewer.innerHTML = `
          <button class="gallery-close">×</button>
          <button class="gallery-arrow gallery-prev">‹</button>
          <div class="gallery-stage">
            <div class="gallery-track">
              ${shots.map(shot => `
                <div class="gallery-slide">
                  <img src="${shot.full}" alt="Game screenshot">
                </div>
              `).join("")}
            </div>
          </div>
          <button class="gallery-arrow gallery-next">›</button>
          <span class="gallery-count"></span>
        `;

        document.body.appendChild(viewer);
        document.body.style.overflow = "hidden";

        const stage = viewer.querySelector(".gallery-stage");
        const track = viewer.querySelector(".gallery-track");
        const count = viewer.querySelector(".gallery-count");

        function render(animate = true) {
          track.style.transition = animate
            ? "transform 350ms cubic-bezier(.22,.61,.36,1)"
            : "none";

          track.style.transform =
            `translate3d(${-current * 100}%,0,0)`;

          count.textContent = `${current + 1} / ${shots.length}`;
        }

        function next() {
          current = (current + 1) % shots.length;
          render();
        }

        function previous() {
          current = (current - 1 + shots.length) % shots.length;
          render();
        }

        function close() {
          viewer.remove();
          document.body.style.overflow = "";
          document.removeEventListener("keydown", keys);
        }

        function keys(e) {
          if (e.key === "Escape") close();
          if (e.key === "ArrowRight") next();
          if (e.key === "ArrowLeft") previous();
        }

        viewer.querySelector(".gallery-close").onclick = close;
        viewer.querySelector(".gallery-next").onclick = next;
        viewer.querySelector(".gallery-prev").onclick = previous;

        stage.addEventListener("pointerdown", e => {
          startX = e.clientX;
          dragX = 0;
          dragging = true;
          track.style.transition = "none";
          stage.setPointerCapture(e.pointerId);
        });

        stage.addEventListener("pointermove", e => {
          if (!dragging) return;

          dragX = e.clientX - startX;

          const width = stage.clientWidth;
          const offset = -current * width + dragX;

          track.style.transform =
            `translate3d(${offset}px,0,0)`;
        });

        function finishDrag() {
          if (!dragging) return;
          dragging = false;

          if (Math.abs(dragX) > stage.clientWidth * 0.18) {
            if (dragX < 0) next();
            else previous();
          } else {
            render();
          }
        }

        stage.addEventListener("pointerup", finishDrag);
        stage.addEventListener("pointercancel", finishDrag);

        document.addEventListener("keydown", keys);

        render(false);
      });
    });

  } catch (error) {
    console.error("Screenshot loading error:", error);
    box.innerHTML =
      "<p class='subtle'>Screenshots couldn't load.</p>";
  }
}



async function loadSteamPrice(id) {
  const appid = steamAppIds[id];
  const box = $("steam-price");

  if (!box) return;

  if (!appid) {
    box.innerHTML = `
      <div class="steam-unavailable">
        <span>STEAM UNAVAILABLE</span>
        <p>This title does not have an official PC version on Steam.</p>
      </div>
    `;
    return;
  }

  box.innerHTML = `
    <div class="steam-loading">
      <span class="steam-loader"></span>
      <p>Connecting to Steam Store...</p>
    </div>
  `;

  try {
    const response = await fetch(`/api/steam/${appid}`);
    const data = await response.json();

    if ($("steam-price") !== box) return;

    if (!response.ok || data.error) {
      box.innerHTML = `
        <div class="steam-unavailable">
          <p>Steam pricing is temporarily unavailable.</p>
        </div>
      `;
      return;
    }

    if (!data.available) {
      box.innerHTML = `
        <div class="steam-unavailable">
          <p>${data.message || "Price currently unavailable."}</p>
        </div>
        <a class="steam-store-button"
           href="https://store.steampowered.com/app/${appid}/"
           target="_blank" rel="noopener noreferrer">
          <span>VIEW ON STEAM</span>
          <span class="steam-button-arrow">↗</span>
        </a>
      `;
      return;
    }

    const finalPrice = data.finalFormatted || "Unavailable";
    const originalPrice = data.originalFormatted || "";
    const discount = Number(data.discountPercent) || 0;

    box.innerHTML = `
      <div class="steam-price-top">
        <span class="steam-status-dot"></span>
        <span>STEAM STORE</span>
        <span class="steam-region">INDIA · INR</span>
      </div>

      <div class="steam-price-main">
        <span class="steam-price-label">CURRENT PRICE</span>
        <div class="steam-price-value">${finalPrice}</div>
        ${
          discount > 0
            ? `
              <div class="steam-sale-row">
                <span class="steam-original-price">${originalPrice}</span>
                <span class="steam-discount">${discount}% OFF</span>
              </div>
            `
            : `<span class="steam-regular-label">REGIONAL STEAM PRICE</span>`
        }
      </div>

      <div class="steam-divider"></div>

      <div class="steam-price-footer">
        <span>Official Steam Store pricing</span>
        <span class="steam-live-label">● LIVE DATA</span>
      </div>

      <a class="steam-store-button"
         href="${data.storeUrl}"
         target="_blank"
         rel="noopener noreferrer">
        <span class="steam-button-icon">↗</span>
        <span>VIEW ON STEAM</span>
        <span class="steam-button-arrow">→</span>
      </a>
    `;
  } catch (error) {
    if ($("steam-price") === box) {
      box.innerHTML = `
        <div class="steam-unavailable">
          <p>Unable to connect to Steam. Please try again later.</p>
        </div>
      `;
    }
  }
}

function renderDevices(){
  const platform = $("platform-select").value;

  const normalize = p => p.toLowerCase().replace(/[^a-z0-9]/g, "");

  const aliases = {
    "playstation3": "ps3",
    "playstation4": "ps4",
    "playstation5": "ps5"
  };

  const selected = aliases[normalize(platform)] || normalize(platform);

  const matches = games.filter(g =>
    g.platforms.some(p => {
      const gamePlatform = normalize(p);

      if (selected === "xbox") {
        return gamePlatform.startsWith("xbox");
      }

      return gamePlatform === selected;
    })
  );

  $("device-results").innerHTML =
    `<p class="eyebrow">${matches.length} GAMES LISTED</p>` +
    (matches.length
      ? matches.map(g =>
          `<div class="result-row">
            <span>${g.name}</span>
            <button class="text-button" data-open="${g.id}">DETAILS →</button>
          </div>`
        ).join("")
      : "<p class='subtle'>No games in this starter catalogue are listed for this platform.</p>");

  $("device-results").querySelectorAll("[data-open]").forEach(b =>
    b.addEventListener("click", () => openGame(Number(b.dataset.open)))
  );
}

$("featured-games").innerHTML=games.filter(g=>g.featured).map(gameCard).join("");
bindCards($("featured-games"));
renderCatalog();renderWishlist();

$("search-input").addEventListener("input",renderCatalog);
$("category-filters").addEventListener("click",e=>{
  const button=e.target.closest("[data-category]");if(!button)return;
  activeCategory=button.dataset.category;
  document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b===button));
  renderCatalog();
});
document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));
$("header-wishlist").addEventListener("click",()=>showPage("wishlist-page"));
$("back-button").addEventListener("click",()=>showPage("home-page"));
$("platform-select").addEventListener("change",renderDevices);
$("explore-button").addEventListener("click",()=>{showPage("home-page");});

if("serviceWorker" in navigator && location.protocol!=="file:"){
  window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
}
// ===== WINTER INTRO =====

const introScreen = document.getElementById("intro-screen");
const enterButton = document.getElementById("enter-archive");

if (introScreen && enterButton) {
  if (localStorage.getItem("soulsArchiveVisited") === "true") {
    introScreen.remove();
  } else {
    enterButton.addEventListener("click", () => {
      localStorage.setItem("soulsArchiveVisited", "true");

      introScreen.classList.add("intro-exit");

      setTimeout(() => {
        introScreen.remove();
      }, 1800);
    });
  }
}

/* ===== SOULS.ARCHIVE MOBILE BACK NAVIGATION ===== */

history.replaceState(
  { soulsArchive: true, page: "home" },
  "",
  location.href
);

window.__soulsCurrentGameId = null;
window.__galleryPopClosing = false;

const __soulsOriginalOpenGame = openGame;

openGame = function(id) {
  window.__soulsCurrentGameId = id;

  if (
    !history.state?.soulsArchive ||
    history.state.page !== "detail" ||
    history.state.gameId !== id
  ) {
    history.pushState(
      { soulsArchive: true, page: "detail", gameId: id },
      "",
      location.href
    );
  }

  __soulsOriginalOpenGame(id);
  loadSteamTrailer(id);
};

// Opening a screenshot creates a gallery history entry.
document.addEventListener("click", e => {
  if (e.target.closest(".screenshot-thumb")) {
    history.pushState(
      {
        soulsArchive: true,
        page: "gallery",
        gameId: window.__soulsCurrentGameId
      },
      "",
      location.href
    );
  }
}, true);

// Closing with the X returns to the previous internal page.
document.addEventListener("click", e => {
  if (
    e.target.closest(".gallery-close") &&
    !window.__galleryPopClosing &&
    history.state?.page === "gallery"
  ) {
    e.preventDefault();
    e.stopImmediatePropagation();
    history.back();
  }
}, true);

// Escape also uses the internal navigation.
document.addEventListener("keydown", e => {
  if (
    e.key === "Escape" &&
    document.querySelector(".screenshot-viewer") &&
    history.state?.page === "gallery"
  ) {
    e.preventDefault();
    e.stopImmediatePropagation();
    history.back();
  }
}, true);

window.addEventListener("popstate", e => {
  const state = e.state;
  const viewer = document.querySelector(".screenshot-viewer");

  if (state?.soulsArchive && state.page === "detail") {
    if (viewer) {
      viewer.classList.add("is-closing");

      window.__galleryPopClosing = true;

      setTimeout(() => {
        const close = viewer.querySelector(".gallery-close");
        if (close) close.click();
        window.__galleryPopClosing = false;
      }, 250);
    }
  }

  if (state?.soulsArchive && state.page === "home") {
    if (viewer) {
      viewer.classList.add("is-closing");
      window.__galleryPopClosing = true;

      setTimeout(() => {
        const close = viewer.querySelector(".gallery-close");
        if (close) close.click();
        window.__galleryPopClosing = false;
        showPage("home-page");
      }, 250);
    } else {
      showPage("home-page");
    }
  }
});


/* ===== OFFICIAL STEAM TRAILERS ===== */

async function loadSteamTrailer(id) {
  const appid = steamAppIds[id];
  const detail = document.getElementById("game-detail");
  const screenshots = document.getElementById("game-screenshots");

  if (!detail || !screenshots) return;

  const oldSection = document.getElementById("steam-trailer-section");
  if (oldSection) oldSection.remove();

  if (!appid) return;

  const section = document.createElement("section");
  section.id = "steam-trailer-section";
  section.className = "detail-section";

  section.innerHTML = `
    <h3>OFFICIAL STEAM TRAILER</h3>
    <p class="subtle">Loading official trailer...</p>
  `;

  detail.insertBefore(section, screenshots.closest(".detail-section"));

  try {
    const response = await fetch(`/api/steam/${appid}`);
    if (!response.ok) throw new Error("Steam request failed");

    const data = await response.json();
    const movie = (data.movies || [])[0];

    if (!movie) {
      section.innerHTML = `
        <h3>OFFICIAL STEAM TRAILER</h3>
        <p class="subtle">No Steam trailer currently available.</p>
      `;
      return;
    }

    const video = movie.mp4 || movie.webm;
    const type = movie.mp4 ? "video/mp4" : "video/webm";

    section.innerHTML = `
      <h3>OFFICIAL STEAM TRAILER</h3>
      <video
        controls
        playsinline
        preload="metadata"
        poster="${movie.thumbnail || ""}"
        style="
          display:block;
          width:100%;
          aspect-ratio:16/9;
          object-fit:contain;
          background:#000;
          border:1px solid #c5a56d;
        ">
        <source src="${video}" type="${type}">
        Your browser does not support this video.
      </video>
      <p class="subtle">${movie.name || "Official Game Trailer"}</p>
    `;
  } catch (error) {
    console.error("Steam trailer error:", error);
    section.innerHTML = `
      <h3>OFFICIAL STEAM TRAILER</h3>
      <p class="subtle">Unable to load the Steam trailer.</p>
    `;
  }
}

/* ===== STEAM HLS TRAILERS ===== */

async function loadSteamTrailer(id) {
  const appid = steamAppIds[id];
  const detail = document.getElementById("game-detail");

  if (!appid || !detail) return;

  const old = document.getElementById("steam-trailer-section");
  if (old) old.remove();

  const section = document.createElement("section");
  section.id = "steam-trailer-section";
  section.className = "detail-section";

  section.innerHTML = `
    <h3>OFFICIAL STEAM TRAILER</h3>
    <p class="subtle">Loading Steam trailer...</p>
  `;

  const screenshotBox = document.getElementById("game-screenshots");
  const screenshotSection = screenshotBox?.closest(".detail-section");

  if (screenshotSection) {
    detail.insertBefore(section, screenshotSection);
  } else {
    detail.appendChild(section);
  }

  try {
    const response = await fetch(`/api/steam/${appid}`);
    if (!response.ok) throw new Error("Steam API error");

    const data = await response.json();
    const movie = (data.movies || []).find(
      m => m.hls || m.mp4 || m.webm
    );

    if (!movie) {
      section.innerHTML = `
        <h3>OFFICIAL STEAM TRAILER</h3>
        <p class="subtle">No Steam trailer found for this game.</p>
      `;
      return;
    }

    
const video = document.createElement("video");
video.playsInline = true;
video.preload = "metadata";
video.poster = movie.thumbnail || "";
video.className = "sa-video";

const player = document.createElement("div");
player.className = "sa-player";

player.innerHTML = `
  <button class="sa-big-play" aria-label="Play trailer">▶</button>

  <div class="sa-controls">
    <button class="sa-play" aria-label="Play">▶</button>
    <span class="sa-time">0:00 / 0:00</span>

    <input class="sa-seek" type="range"
      min="0" max="1000" value="0" aria-label="Seek">

    <button class="sa-mute" aria-label="Mute">♫</button>
    <input class="sa-volume" type="range"
      min="0" max="1" step="0.05" value="1" aria-label="Volume">

    <button class="sa-fullscreen" aria-label="Fullscreen">⛶</button>
  </div>
`;

player.prepend(video);
section.innerHTML = "<h3>OFFICIAL STEAM TRAILER</h3>";
section.appendChild(player);

const playBtn = player.querySelector(".sa-play");
const bigPlay = player.querySelector(".sa-big-play");
const seek = player.querySelector(".sa-seek");
const time = player.querySelector(".sa-time");
const muteBtn = player.querySelector(".sa-mute");
const volume = player.querySelector(".sa-volume");

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function updatePlayState() {
  playBtn.textContent = video.paused ? "▶" : "Ⅱ";
  bigPlay.hidden = !video.paused;
}

function updateTime() {
  const duration = video.duration || 0;
  const current = video.currentTime || 0;

  time.textContent =
    `${formatTime(current)} / ${formatTime(duration)}`;

  seek.value = duration ? (current / duration) * 1000 : 0;
}

function updateVolume() {
  muteBtn.textContent =
    video.muted || video.volume === 0 ? "×" : "♫";
}

function togglePlay() {
  if (video.paused) {
    video.play().catch(() => {});
  } else {
    video.pause();
  }
}

playBtn.addEventListener("click", togglePlay);
bigPlay.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

video.addEventListener("play", updatePlayState);
video.addEventListener("pause", updatePlayState);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("loadedmetadata", updateTime);
video.addEventListener("volumechange", updateVolume);

seek.addEventListener("input", () => {
  if (video.duration) {
    video.currentTime = (seek.value / 1000) * video.duration;
  }
});

volume.addEventListener("input", () => {
  video.volume = Number(volume.value);
  video.muted = video.volume === 0;
  updateVolume();
});

muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  updateVolume();
});

player.querySelector(".sa-fullscreen").addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (player.requestFullscreen) {
    player.requestFullscreen();
  } else if (video.webkitEnterFullscreen) {
    video.webkitEnterFullscreen();
  }
});

updatePlayState();
updateVolume();

const caption = document.createElement("p");
caption.className = "subtle";
caption.textContent = movie.name || "Official Steam Trailer";
section.appendChild(caption);

    if (movie.mp4 || movie.webm) {
      const source = document.createElement("source");
      source.src = movie.mp4 || movie.webm;
      source.type = movie.mp4 ? "video/mp4" : "video/webm";
      video.appendChild(source);
      video.load();
      return;
    }

    if (movie.hls) {
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = movie.hls;
      } else {
        if (!window.Hls) {
          await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/hls.js@latest";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        if (window.Hls && Hls.isSupported()) {
          const player = new Hls();
          player.loadSource(movie.hls);
          player.attachMedia(video);
        } else {
          throw new Error("HLS playback is not supported");
        }
      }
    }

  } catch (error) {
    console.error("Steam trailer error:", error);
    section.innerHTML = `
      <h3>OFFICIAL STEAM TRAILER</h3>
      <p class="subtle">Unable to play the Steam trailer.</p>
    `;
  }
}

const __soulsOriginalOpenGameForTrailer = openGame;

openGame = function(id) {
  __soulsOriginalOpenGameForTrailer(id);
  loadSteamTrailer(id);
};



/* =====================================================
   SOULS.ARCHIVE — FINAL TRAILER SYSTEM
   STEAM + YOUTUBE + AUTOPLAY + CINEMATIC TRANSITIONS
===================================================== */

const saYouTubeTrailers = {
  1: "E3Huy2cdih0",
  2: "KfjG9ZLGBHE",
  3: "U6uyuIQYlfY",
  4: "_zDZYrIUgKE",
  5: "2TMs2E6cms4",
  6: "G203e1HhixY",
  7: "rXMX4YJ7Lks",
  8: "kKO1s-CUZvY",
  9: "u83VdXAVq08",
  10: "kXZoKdr-xeo",
  11: "oceLRiqQsko",
  12: "hHt30e-r-G8",
  13: "xlmdeQFyqC0",
  14: "UAO2urG23S4",
  15: "6XGeJwsUP9c",
  16: "8AXi3ZZ6VS4"
};

// YouTube-only games
const saYouTubeOnly = new Set([5, 6, 7, 15]);

// Preserve the original Steam player
const saOriginalSteamLoader = loadSteamTrailer;

let saTrailerGameId = null;
let saTrailerPromise = null;

// Cinematic trailer styling
if (!document.getElementById("sa-final-trailer-style")) {
  const style = document.createElement("style");
  style.id = "sa-final-trailer-style";

  style.textContent = `
    #sa-trailer-carousel {
      position: relative;
      overflow: hidden;
    }

    #sa-trailer-carousel .sa-trailer-tabs {
      display: flex;
      gap: 12px;
      margin: 16px 0;
    }

    #sa-trailer-carousel .sa-trailer-tab {
      cursor: pointer;
      transition: all .3s ease;
    }

    #sa-trailer-carousel .sa-trailer-tab.active {
      opacity: 1;
      transform: translateY(-2px);
    }

    #sa-trailer-carousel .sa-trailer-viewport {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      overflow: hidden;
      background: #080808;
      border-radius: 12px;
      isolation: isolate;
    }

    #sa-trailer-carousel .sa-trailer-slide {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      visibility: hidden;
      transform: translateX(25px) scale(.985);
      transition:
        opacity .65s ease,
        transform .75s cubic-bezier(.22,1,.36,1),
        visibility .65s;
    }

    #sa-trailer-carousel:not(.sa-show-youtube)
    .sa-steam-slide {
      opacity: 1;
      visibility: visible;
      transform: translateX(0) scale(1);
    }

    #sa-trailer-carousel.sa-show-youtube
    .sa-youtube-slide {
      opacity: 1;
      visibility: visible;
      transform: translateX(0) scale(1);
    }

    #sa-trailer-carousel.sa-show-youtube
    .sa-steam-slide {
      transform: translateX(-25px) scale(.985);
    }

    #sa-trailer-carousel:not(.sa-show-youtube)
    .sa-youtube-slide {
      transform: translateX(25px) scale(.985);
    }

    #sa-trailer-carousel .sa-youtube-frame,
    #sa-trailer-carousel iframe {
      width: 100%;
      height: 100%;
      border: 0;
      display: block;
    }

    #sa-trailer-carousel .sa-trailer-viewport::after {
      content: "";
      position: absolute;
      inset: -100% -50%;
      pointer-events: none;
      z-index: 5;
      opacity: 0;
      transform: translateX(-65%) rotate(18deg);
      background: linear-gradient(
        90deg,
        transparent 35%,
        rgba(255,255,255,.04) 45%,
        rgba(255,255,255,.23) 50%,
        rgba(255,255,255,.04) 55%,
        transparent 65%
      );
    }

    #sa-trailer-carousel.sa-light-sweep
    .sa-trailer-viewport::after {
      animation: saLightSweep 1s ease forwards;
    }

    @keyframes saLightSweep {
      0% {
        opacity: 0;
        transform: translateX(-65%) rotate(18deg);
      }
      25% { opacity: 1; }
      100% {
        opacity: 0;
        transform: translateX(65%) rotate(18deg);
      }
    }

    #sa-trailer-carousel .sa-trailer-hint {
      opacity: .55;
      font-size: 11px;
      letter-spacing: 2px;
      margin-top: 12px;
    }

    @media (prefers-reduced-motion: reduce) {
      #sa-trailer-carousel *,
      #sa-trailer-carousel::after {
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  document.head.appendChild(style);
}

loadSteamTrailer = function(id) {
  id = Number(id);

  if (saTrailerGameId === id && saTrailerPromise) {
    return saTrailerPromise;
  }

  saTrailerGameId = id;

  saTrailerPromise = (async () => {
    const detail = document.getElementById("game-detail");
    if (!detail) return;

    document.getElementById("sa-trailer-carousel")?.remove();
    document.getElementById("steam-trailer-section")?.remove();

    const youtubeOnly = saYouTubeOnly.has(id);
    const hasSteam = !!steamAppIds[id] && !youtubeOnly;
    const videoId = saYouTubeTrailers[id];

    const section = document.createElement("section");
    section.id = "sa-trailer-carousel";
    section.className = "detail-section";

    section.innerHTML = `
      <h3>TRAILERS</h3>

      ${youtubeOnly ? `
        <p class="sa-trailer-hint">YOUTUBE EXCLUSIVE</p>
      ` : `
        <div class="sa-trailer-tabs">
          <button class="sa-trailer-tab active"
            data-source="steam">STEAM</button>
          <button class="sa-trailer-tab"
            data-source="youtube">YOUTUBE</button>
        </div>
      `}

      <div class="sa-trailer-viewport">
        <div class="sa-trailer-slide sa-steam-slide">
          <p class="subtle">Loading Steam trailer...</p>
        </div>

        <div class="sa-trailer-slide sa-youtube-slide">
          <div class="sa-youtube-frame">
            <iframe
              title="Game trailer"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>

      <p class="sa-trailer-hint">
        ${youtubeOnly ? "OFFICIAL GAME TRAILER" : "SWITCH TRAILER SOURCE"}
      </p>
    `;

    const screenshotBox = document.getElementById("game-screenshots");
    const screenshotSection = screenshotBox?.closest(".detail-section");

    if (screenshotSection) {
      detail.insertBefore(section, screenshotSection);
    } else {
      detail.appendChild(section);
    }

    const steamSlide = section.querySelector(".sa-steam-slide");
    const youtubeSlide = section.querySelector(".sa-youtube-slide");
    const iframe = section.querySelector("iframe");
    const viewport = section.querySelector(".sa-trailer-viewport");
    const tabs = [...section.querySelectorAll(".sa-trailer-tab")];

    let currentSource = youtubeOnly ? "youtube" : "steam";
    let isVisible = false;
    let youtubeStarted = false;
let saYoutubeSoundRequested = false;

    if (!videoId) {
      youtubeSlide.innerHTML =
        '<p class="subtle">YouTube trailer unavailable.</p>';
    }

    function pauseYouTube() {
      if (!youtubeStarted || !iframe.contentWindow) return;

      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: "pauseVideo",
          args: []
        }),
        "*"
      );
    }

    function startYouTube(userInitiated = false) {
  if (userInitiated) {
    saYoutubeSoundRequested = true;
  }

  if (
    currentSource !== "youtube" ||
    !isVisible ||
    !videoId ||
    !section.isConnected
  ) return;

  if (!youtubeStarted) {
    iframe.src =
      `https://www.youtube-nocookie.com/embed/${videoId}` +
      `?autoplay=1` +
      `&mute=${saYoutubeSoundRequested ? 0 : 1}` +
      `&playsinline=1&controls=1&enablejsapi=1`;

    youtubeStarted = true;
  } else if (iframe.contentWindow) {
    ["unMute", "playVideo"].forEach(command => {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: command,
          args: []
        }),
        "*"
      );
    });
  }
}

    function switchSource(source) {
      if (youtubeOnly) source = "youtube";

      if (source === currentSource) {
        if (source === "youtube") startYouTube(true);
        return;
      }

      if (currentSource === "youtube") {
        pauseYouTube();
      }

      currentSource = source;

      tabs.forEach(tab => {
        tab.classList.toggle(
          "active",
          tab.dataset.source === source
        );
      });

      section.classList.toggle(
        "sa-show-youtube",
        source === "youtube"
      );

      section.classList.remove("sa-light-sweep");
      void section.offsetWidth;
      section.classList.add("sa-light-sweep");

      if (source === "youtube") {
        startYouTube();
      }
    }

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        switchSource(tab.dataset.source);
      });
    });

    // Mobile swipe switching
    let startX = 0;

    if (!youtubeOnly) {
      viewport.addEventListener("touchstart", event => {
        startX = event.changedTouches[0].screenX;
      }, { passive: true });

      viewport.addEventListener("touchend", event => {
        const difference =
          event.changedTouches[0].screenX - startX;

        if (Math.abs(difference) < 55) return;

        switchSource(
          difference > 0 ? "youtube" : "steam"
        );
      }, { passive: true });
    }

    // Autoplay only when trailer section is visible
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting &&
            entry.intersectionRatio >= 0.35;

          if (isVisible) {
            startYouTube();
          } else {
            pauseYouTube();
          }
        });
      }, { threshold: [0, 0.35, 0.6] });

      observer.observe(section);
    } else {
      isVisible = true;
    }

    // Initial source
    if (youtubeOnly) {
      section.classList.add("sa-show-youtube");
    }

    // Load original Steam player without changing its controls
    if (hasSteam) {
      await saOriginalSteamLoader(id);

      if (
        saTrailerGameId !== id ||
        !section.isConnected
      ) return;

      const steamSection =
        document.getElementById("steam-trailer-section");
if (steamSection) {
  steamSlide.innerHTML = "";
  steamSlide.appendChild(steamSection);
}
       else {
        steamSlide.innerHTML =
          '<p class="subtle">Steam trailer unavailable.</p>';
      }
    } else {
      steamSlide.innerHTML =
        '<p class="subtle">No Steam trailer option for this game.</p>';
    }

    if (youtubeOnly) {
      startYouTube();
    }

  })();

  return saTrailerPromise;
};

console.log("SOULS.ARCHIVE FINAL TRAILER SYSTEM LOADED.");

/* ===== SOULS.ARCHIVE — STEAM PLAYER DISPLAY FIX ===== */

const saPreviousTrailerLoader = loadSteamTrailer;

loadSteamTrailer = function(id) {
  const result = saPreviousTrailerLoader(id);

  Promise.resolve(result).then(() => {
    const carousel = document.getElementById("sa-trailer-carousel");
    const steamSlide = carousel?.querySelector(".sa-steam-slide");
    const steamSection = document.getElementById("steam-trailer-section");
    const player = steamSection?.querySelector(".sa-player");

    if (!carousel || !steamSlide || !player) return;

    player.style.cssText += `
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 100%;
      margin: 0;
      border: 0;
      border-radius: 0;
      overflow: hidden;
    `;

    steamSlide.innerHTML = "";
    steamSlide.appendChild(player);

    const video = player.querySelector("video");

    if (video) {
      video.style.width = "100%";
      video.style.height = "100%";
      video.style.objectFit = "contain";
    }
  }).catch(error => {
    console.warn("Steam player display fix:", error);
  });

  return result;
};

console.log("SOULS.ARCHIVE Steam display fix loaded.");

/* 

/* ==========================================
   SOULS.ARCHIVE — YOUTUBE PLAYER
   ALL 16 GAMES | MANUAL PLAY | SOUND
========================================== */

const saYTOnlyTrailers = {
  1: "E3Huy2cdih0",
  2: "KfjG9ZLGBHE",
  3: "U6uyuIQYlfY",
  4: "_zDZYrIUgKE",
  5: "2TMs2E6cms4",
  6: "G203e1HhixY",
  7: "rXMX4YJ7Lks",
  8: "kKO1s-CUZvY",
  9: "u83VdXAVq08",
  10: "kXZoKdr-xeo",
  11: "oceLRiqQsko",
  12: "hHt30e-r-G8",
  13: "xlmdeQFyqC0",
  14: "UAO2urG23S4",
  15: "6XGeJwsUP9c",
  16: "8AXi3ZZ6VS4"
};

let saYTCurrentGame = null;

loadSteamTrailer = function(id) {
  id = Number(id);

  const detail = document.getElementById("game-detail");
  if (!detail) return;

  if (
    saYTCurrentGame === id &&
    document.getElementById("sa-youtube-only")
  ) return;

  saYTCurrentGame = id;

  document.getElementById("sa-trailer-carousel")?.remove();
  document.getElementById("steam-trailer-section")?.remove();
  document.getElementById("sa-youtube-only")?.remove();

  const videoId = saYTOnlyTrailers[id];

  const section = document.createElement("section");
  section.id = "sa-youtube-only";
  section.className = "detail-section sa-youtube-only";

  section.innerHTML = `
    <h3>OFFICIAL TRAILER</h3>

    <div class="sa-yt-frame">
      ${
        videoId
          ? `<iframe
              title="Official game trailer"
              src="https://www.youtube-nocookie.com/embed/${videoId}?playsinline=1&controls=1&rel=0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>`
          : `<p class="subtle">Trailer unavailable.</p>`
      }
    </div>

    <p class="sa-yt-caption">EXPERIENCE THE GAME</p>
  `;

  const screenshotBox =
    document.getElementById("game-screenshots");

  const screenshotSection =
    screenshotBox?.closest(".detail-section");

  if (screenshotSection) {
    detail.insertBefore(section, screenshotSection);
  } else {
    detail.appendChild(section);
  }
};

console.log("SOULS.ARCHIVE — MANUAL YOUTUBE PLAYER READY");

/* ==========================================
   SOULS.ARCHIVE — CUSTOM SCREENSHOT SOURCES
   DEMON'S SOULS + BLOODBORNE
========================================== */

const saCustomScreenshots = {
  5: [
    "https://static.actugaming.net/media/2020/11/demons-souls-5.jpg",
    "https://images.gamersyde.com/image_stream-42884-4516_0002.jpg",
    "https://www.4gamer.net/games/512/G051224/20201112118/SS/005.jpg",
    "https://images.everyeye.it/img-notizie/demon-s-souls-ps5-tower-knight-protagonista-screenshot-v3-452776.jpg"
  ],

  6: [
    "https://cdn.mos.cms.futurecdn.net/2757183492fae32b6b7323209357734a.jpg",
    "https://cdn.mos.cms.futurecdn.net/6ab506e7198124099827eb0c09eb4495.jpg",
    "https://www.legendra.com/media/screenshots/play4/bloodborne___game_of_the_year_edition/bloodborne___game_of_the_year_edition_screen_2.jpg",
    "https://64.media.tumblr.com/609fdf59a1978e45f56ac54d18f6f3ea/33499e86bc792e33-98/s2048x3072/50020706258d947f3b1ebf83403973959a692455.jpg"
    ]
};

const saOriginalScreenshotLoader = loadGameScreenshots;
const saOriginalFetch = window.fetch.bind(window);

window.fetch = function(resource, options) {
  const url = typeof resource === "string"
    ? resource
    : resource.url;

  const match = url.match(/\/api\/steam\/sa-custom-(5|6)/);

  if (match) {
    const images = saCustomScreenshots[Number(match[1])];

    return Promise.resolve({
      ok: true,
      json: async () => ({
        screenshots: images.map(src => ({
          thumbnail: src,
          full: src
        }))
      })
    });
  }

  return saOriginalFetch(resource, options);
};

loadGameScreenshots = function(id) {
  if (!saCustomScreenshots[id]) {
    return saOriginalScreenshotLoader(id);
  }

  const previousId = steamAppIds[id];

  steamAppIds[id] = `sa-custom-${id}`;

  const result = saOriginalScreenshotLoader(id);

  if (previousId === undefined) {
    delete steamAppIds[id];
  } else {
    steamAppIds[id] = previousId;
  }

  return result;
};

console.log("SOULS.ARCHIVE — CUSTOM SCREENSHOTS READY");


/* SOULS.ARCHIVE — DEVICE SELECTOR + TRANSITIONS */

document.querySelectorAll(".device-option").forEach(button => {
  button.addEventListener("click", () => {
    const platform = button.dataset.platform;
    const selector = document.getElementById("platform-select");
    const results = document.getElementById("device-results");

    if (!selector || !results) return;

    selector.value = platform;

    document.querySelectorAll(".device-option").forEach(option => {
      option.classList.toggle("active", option === button);
    });

    results.classList.remove("sa-device-transition");

    renderDevices();

    void results.offsetWidth;
    results.classList.add("sa-device-transition");
  });
});

console.log("SOULS.ARCHIVE — DEVICE TRANSITIONS READY");

/* ==========================================
   SOULS.ARCHIVE — SECTION TRANSITIONS
   PRESERVE HOME + GAME DETAIL ANIMATIONS
========================================== */

showPage = function(pageId) {
  const pages = [...document.querySelectorAll(".page")];

  pages.forEach(page => {
    page.classList.remove("sa-section-enter");
    page.hidden = page.id !== pageId;
  });

  const target = document.getElementById(pageId);

  // Animate only the main navigation sections.
  const animatedSections = [
    "wishlist-page",
    "rankings-page",
    "devices-page",
    "about-page"
  ];

  if (target && animatedSections.includes(pageId)) {
    void target.offsetWidth;
    target.classList.add("sa-section-enter");
  }

  document.querySelectorAll(".nav-item").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.page === pageId
    );
  });

  if (pageId === "wishlist-page") renderWishlist();
  if (pageId === "devices-page") renderDevices();
  if (pageId === "rankings-page") renderRankings();

  window.scrollTo({ top: 0, behavior: "smooth" });
};

console.log("SOULS.ARCHIVE — SECTION TRANSITIONS READY");

/* ==========================================
   SOULS.ARCHIVE — STORE GALLERY
   STEAM + PLAYSTATION + NINTENDO
========================================== */

const saStorePrices = {
  playstation: {
    1: "₹3,499",
    2: "₹2,499",
    5: "₹4,999",
    6: "₹1,499",
    9: "₹3,999",
    11: "₹1,999",
    12: "₹2,499",
    13: "₹2,999"
  },
  nintendo: {
    14: "$15.00",
    15: "$19.99"
  }
};

const saStoreLinks = {
  playstation: {
    1: "https://store.playstation.com/en-in/product/EP0700-PPSA04609_00-ELDENRING0000000",
    2: "https://store.playstation.com/en-in/product/EP0700-CUSA08495_00-DARKSOULSHD00000/",
    5: "https://store.playstation.com/en-in/concept/10000368/",
    6: "https://store.playstation.com/en-in/product/EP9000-CUSA00207_00-BLOODBORNE0000EU/",
    9: "https://store.playstation.com/en-in/product/HP6545-PPSA23226_00-GAME000000000000/",
    11: "https://store.playstation.com/en-in/product/EP4321-PPSA03641_00-0026114790873430",
    12: "https://store.playstation.com/en-in/product/EP9000-CUSA15526_00-NIOH2EU000000000",
    13: "https://store.playstation.com/en-in/concept/10004116"
  },
  nintendo: {
    2: "https://www.nintendo.com/us/search/#q=Dark%20Souls%20Remastered",
    14: "https://www.nintendo.com/US/store/products/hollow-knight-switch/",
    15: "https://www.nintendo.com/us/search/#q=Hollow%20Knight%20Silksong",
    16: "https://www.nintendo.com/us/store/products/nine-sols-switch/"
  }
};

function saStoreCard(platform, game) {
  const isSony = platform === "playstation";
  const prices = saStorePrices[platform];
  const links = saStoreLinks[platform];

  const price = prices[game.id];
  const url = links[game.id] || (
    isSony
      ? "https://store.playstation.com/en-in/search/" +
        encodeURIComponent(game.name)
      : "https://www.nintendo.com/us/search/#q=" +
        encodeURIComponent(game.name)
  );

  const title = isSony
    ? "PLAYSTATION STORE"
    : "NINTENDO eSHOP";

  const subtitle = isSony
    ? "OFFICIAL SONY STORE · INDIA"
    : "OFFICIAL NINTENDO STORE · USA";

  const priceText = price
    ? `<strong>${price}</strong>`
    : `<strong class="sa-store-price-pending">Check official store price</strong>`;

  return `
    <div class="sa-store-card sa-store-${platform}">
      <div class="sa-store-card-top">
        <span class="sa-store-indicator"></span>
        <span>${title}</span>
        <small>${subtitle}</small>
      </div>

      <div class="sa-store-card-main">
        <span class="sa-store-label">ORIGINAL PRICE</span>
        ${priceText}
        <p>
          ${price
            ? "Discounts and current offers are shown on the official store."
            : "Check the official store for the listed edition and price."}
        </p>
      </div>

      <div class="sa-store-card-footer">
        <span>OFFICIAL STORE LISTING</span>
        <span>↗</span>
      </div>

      <a class="sa-store-visit"
         href="${url}"
         target="_blank"
         rel="noopener noreferrer">
        VISIT ${isSony ? "PLAYSTATION" : "NINTENDO"} STORE
        <span>→</span>
      </a>
    </div>
  `;
}

function saBuildStoreGallery(gameId) {
  const game = games.find(item => item.id === Number(gameId));
  const detail = document.getElementById("game-detail");
  const steamSection = document.getElementById("steam-price")
    ?.closest(".detail-section");

  if (!game || !detail || !steamSection) return;

  // Prevent duplicate galleries.
  detail.querySelector(".sa-store-gallery")?.remove();

  const hasPlayStation = game.platforms.some(platform =>
    /^PS[345]$/.test(platform)
  );

  const hasNintendo = game.platforms.some(platform =>
    platform.toLowerCase().includes("nintendo switch")
  );

  const gallery = document.createElement("section");
  gallery.className = "detail-section sa-store-gallery";

  gallery.innerHTML = `
    <h3>STORE GALLERY</h3>

    <div class="sa-store-viewport">
      <div class="sa-store-track"></div>
    </div>

    <div class="sa-store-navigation">
      <button class="sa-store-arrow sa-store-prev"
              type="button" aria-label="Previous store">‹</button>
      <div class="sa-store-dots"></div>
      <button class="sa-store-arrow sa-store-next"
              type="button" aria-label="Next store">›</button>
    </div>

    <p class="sa-store-hint">SWIPE TO EXPLORE STORES</p>
  `;

  const track = gallery.querySelector(".sa-store-track");

  // Keep the ORIGINAL Steam section and its existing price loader.
  const steamSlide = document.createElement("div");
  steamSlide.className = "sa-store-slide sa-store-slide-steam";
  steamSlide.appendChild(steamSection);
  track.appendChild(steamSlide);

  if (hasPlayStation) {
    const slide = document.createElement("div");
    slide.className = "sa-store-slide";
    slide.innerHTML = saStoreCard("playstation", game);
    track.appendChild(slide);
  }

  if (hasNintendo) {
    const slide = document.createElement("div");
    slide.className = "sa-store-slide";
    slide.innerHTML = saStoreCard("nintendo", game);
    track.appendChild(slide);
  }

  // Put the gallery where the Steam section used to be.
  detail.insertBefore(gallery, steamSection);
  gallery.querySelector(".sa-store-viewport").appendChild(track);

  const viewport = gallery.querySelector(".sa-store-viewport");
  const dots = gallery.querySelector(".sa-store-dots");
  const previous = gallery.querySelector(".sa-store-prev");
  const next = gallery.querySelector(".sa-store-next");

  const slides = [...track.children];
  let current = 0;
  let startX = 0;
  let dragX = 0;
  let dragging = false;

  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "sa-store-dot";
    dot.setAttribute("aria-label", `Show store ${index + 1}`);
    dot.addEventListener("click", () => goTo(index));
    dots.appendChild(dot);
  });

  function render(animate = true) {
    track.style.transition = animate
      ? "transform 420ms cubic-bezier(.22,.61,.36,1)"
      : "none";

    track.style.transform =
      `translate3d(${-current * viewport.clientWidth}px,0,0)`;

    [...dots.children].forEach((dot, index) => {
      dot.classList.toggle("active", index === current);
    });

    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
  }

  function goTo(index) {
    current = Math.max(0, Math.min(index, slides.length - 1));
    render();
  }

  previous.addEventListener("click", () => goTo(current - 1));
  next.addEventListener("click", () => goTo(current + 1));

  viewport.addEventListener("pointerdown", event => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragging = true;
    startX = event.clientX;
    dragX = 0;
    track.style.transition = "none";
    viewport.setPointerCapture(event.pointerId);
  });

  viewport.addEventListener("pointermove", event => {
    if (!dragging) return;

    dragX = event.clientX - startX;

    const offset =
      -current * viewport.clientWidth + dragX;

    track.style.transform =
      `translate3d(${offset}px,0,0)`;
  });

  function finishDrag() {
    if (!dragging) return;
    dragging = false;

    if (Math.abs(dragX) > viewport.clientWidth * 0.18) {
      goTo(current + (dragX < 0 ? 1 : -1));
    } else {
      render();
    }
  }

  viewport.addEventListener("pointerup", finishDrag);
  viewport.addEventListener("pointercancel", finishDrag);

  render(false);
}

// Keep all existing openGame behaviour.
const saStorePreviousOpenGame = openGame;

openGame = function(id) {
  saStorePreviousOpenGame(id);
  saBuildStoreGallery(id);
};

console.log("SOULS.ARCHIVE — STORE GALLERY READY");

/* ==========================================
   SOULS.ARCHIVE — STORE GALLERY
========================================== */

const saStorePrices = {
  playstation: {
    1: "₹3,499",
    2: "₹2,499",
    5: "₹4,999",
    6: "₹1,499",
    9: "₹3,999",
    11: "₹1,999",
    12: "₹2,499",
    13: "₹2,999"
  },
  nintendo: {
    14: "$15.00",
    15: "$19.99"
  }
};

const saStoreLinks = {
  playstation: {
    1: "https://store.playstation.com/en-in/product/EP0700-PPSA04609_00-ELDENRING0000000",
    2: "https://store.playstation.com/en-in/product/EP0700-CUSA08495_00-DARKSOULSHD00000/",
    5: "https://store.playstation.com/en-in/concept/10000368/",
    6: "https://store.playstation.com/en-in/product/EP9000-CUSA00207_00-BLOODBORNE0000EU/",
    9: "https://store.playstation.com/en-in/product/HP6545-PPSA23226_00-GAME000000000000/",
    11: "https://store.playstation.com/en-in/product/EP4321-PPSA03641_00-0026114790873430",
    12: "https://store.playstation.com/en-in/product/EP9000-CUSA15526_00-NIOH2EU000000000",
    13: "https://store.playstation.com/en-in/concept/10004116"
  },
  nintendo: {
    2: "https://www.nintendo.com/us/search/#q=Dark%20Souls%20Remastered",
    14: "https://www.nintendo.com/US/store/products/hollow-knight-switch/",
    15: "https://www.nintendo.com/us/search/#q=Hollow%20Knight%20Silksong",
    16: "https://www.nintendo.com/us/store/products/nine-sols-switch/"
  }
};

function saStoreCard(platform, game) {
  const isSony = platform === "playstation";
  const price = saStorePrices[platform][game.id];

  const url = saStoreLinks[platform][game.id] || (
    isSony
      ? "https://store.playstation.com/en-in/search/" +
        encodeURIComponent(game.name)
      : "https://www.nintendo.com/us/search/#q=" +
        encodeURIComponent(game.name)
  );

  const title = isSony ? "PLAYSTATION STORE" : "NINTENDO eSHOP";
  const subtitle = isSony
    ? "OFFICIAL SONY STORE · INDIA"
    : "OFFICIAL NINTENDO STORE · USA";

  return `
    <div class="sa-store-card sa-store-${platform}">
      <div class="sa-store-card-top">
        <span class="sa-store-indicator"></span>
        <span>${title}</span>
        <small>${subtitle}</small>
      </div>

      <div class="sa-store-card-main">
        <span class="sa-store-label">ORIGINAL PRICE</span>
        <strong>${price || "Check official store price"}</strong>
        <p>
          ${price
            ? "Check the official store for current discounts."
            : "Check the official store for the listed edition and price."}
        </p>
      </div>

      <div class="sa-store-card-footer">
        <span>OFFICIAL STORE LISTING</span>
        <span>↗</span>
      </div>

      <a class="sa-store-visit"
         href="${url}"
         target="_blank"
         rel="noopener noreferrer">
        VISIT ${isSony ? "PLAYSTATION" : "NINTENDO"} STORE
        <span>→</span>
      </a>
    </div>
  `;
}

function saBuildStoreGallery(gameId) {
  const game = games.find(item => item.id === Number(gameId));
  const detail = document.getElementById("game-detail");
  const steamSection = document.getElementById("steam-price")
    ?.closest(".detail-section");

  if (!game || !detail || !steamSection) return;

  detail.querySelector(".sa-store-gallery")?.remove();

  const hasPlayStation = game.platforms.some(platform =>
    /^PS[345]$/.test(platform)
  );

  const hasNintendo = game.platforms.some(platform =>
    platform.toLowerCase().includes("nintendo switch")
  );

  const gallery = document.createElement("section");
  gallery.className = "detail-section sa-store-gallery";

  gallery.innerHTML = `
    <h3>STORE GALLERY</h3>
    <div class="sa-store-viewport">
      <div class="sa-store-track"></div>
    </div>
    <div class="sa-store-navigation">
      <button class="sa-store-arrow sa-store-prev"
              type="button" aria-label="Previous store">‹</button>
      <div class="sa-store-dots"></div>
      <button class="sa-store-arrow sa-store-next"
              type="button" aria-label="Next store">›</button>
    </div>
    <p class="sa-store-hint">SWIPE TO EXPLORE STORES</p>
  `;

  // Insert the gallery BEFORE moving the original Steam section.
  detail.insertBefore(gallery, steamSection);

  const track = gallery.querySelector(".sa-store-track");

  // Move the original Steam section without rebuilding or changing it.
  const steamSlide = document.createElement("div");
  steamSlide.className = "sa-store-slide sa-store-slide-steam";
  steamSlide.appendChild(steamSection);
  track.appendChild(steamSlide);

  if (hasPlayStation) {
    const slide = document.createElement("div");
    slide.className = "sa-store-slide";
    slide.innerHTML = saStoreCard("playstation", game);
    track.appendChild(slide);
  }

  if (hasNintendo) {
    const slide = document.createElement("div");
    slide.className = "sa-store-slide";
    slide.innerHTML = saStoreCard("nintendo", game);
    track.appendChild(slide);
  }

  const viewport = gallery.querySelector(".sa-store-viewport");
  const dots = gallery.querySelector(".sa-store-dots");
  const previous = gallery.querySelector(".sa-store-prev");
  const next = gallery.querySelector(".sa-store-next");

  const slides = [...track.children];
  let current = 0;
  let startX = 0;
  let dragX = 0;
  let dragging = false;

  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "sa-store-dot";
    dot.setAttribute("aria-label", `Show store ${index + 1}`);
    dot.addEventListener("click", () => goTo(index));
    dots.appendChild(dot);
  });

  function render(animate = true) {
    track.style.transition = animate
      ? "transform 420ms cubic-bezier(.22,.61,.36,1)"
      : "none";

    track.style.transform =
      `translate3d(${-current * viewport.clientWidth}px,0,0)`;

    [...dots.children].forEach((dot, index) => {
      dot.classList.toggle("active", index === current);
    });

    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
  }

  function goTo(index) {
    current = Math.max(0, Math.min(index, slides.length - 1));
    render();
  }

  previous.addEventListener("click", () => goTo(current - 1));
  next.addEventListener("click", () => goTo(current + 1));

  viewport.addEventListener("pointerdown", event => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragging = true;
    startX = event.clientX;
    dragX = 0;
    track.style.transition = "none";
    viewport.setPointerCapture(event.pointerId);
  });

  viewport.addEventListener("pointermove", event => {
    if (!dragging) return;

    dragX = event.clientX - startX;

    track.style.transform =
      `translate3d(${-current * viewport.clientWidth + dragX}px,0,0)`;
  });

  function finishDrag() {
    if (!dragging) return;
    dragging = false;

    if (Math.abs(dragX) > viewport.clientWidth * 0.18) {
      goTo(current + (dragX < 0 ? 1 : -1));
    } else {
      render();
    }
  }

  viewport.addEventListener("pointerup", finishDrag);
  viewport.addEventListener("pointercancel", finishDrag);

  render(false);
}

// Preserve the existing openGame function and its other features.
const saStorePreviousOpenGame = openGame;

openGame = function(id) {
  saStorePreviousOpenGame(id);
  saBuildStoreGallery(id);
};

console.log("SOULS.ARCHIVE — STORE GALLERY READY");

