
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

  // Fade the current page to darkness
  requestAnimationFrame(() => {
    curtain.style.opacity = "1";
  });

  await new Promise(resolve => setTimeout(resolve, 370));

  // Open the selected game's detail page
  openGame(gameId);

  // Reveal the new page smoothly
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
    const open=()=>animateCardOpen(card, Number(card.dataset.game));
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
const media = gameMedia[id] || {};
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
    const response = await fetch(
      `https://store.steampowered.com/api/appdetails?appids=${appid}`
    );

    const data = await response.json();
    const screenshots = data[appid]?.data?.screenshots || [];

    if (!screenshots.length) {
      box.innerHTML = "<p class='subtle'>No screenshots available.</p>";
      return;
    }

    box.innerHTML = screenshots.slice(0, 6).map(shot => `
      <img
        src="${shot.path_thumbnail}"
        alt="Game screenshot"
        loading="lazy"
        style="width:100%;border:1px solid #c5a56d;border-radius:6px;"
      >
    `).join("");
  } catch (error) {
    box.innerHTML = "<p class='subtle'>Screenshots couldn't load.</p>";
  }
}
const gameMedia = {
  1: {
    trailerId: "l6pCyV7PnqI",
    screenshotSource: "steam",
    manualScreenshots: []
  }
};
  

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
