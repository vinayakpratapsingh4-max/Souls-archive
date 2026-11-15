
const games = [
  {id:1,name:"Elden Ring",genre:"Souls",year:2022,studio:"FromSoftware",difficulty:"Hard",platforms:["PC","PS4","PS5","Xbox One","Xbox Series X/S"],description:"ELDEN RING features vast fantastical landscapes and shadowy, complex dungeons that are connected seamlessly. Traverse the breathtaking world on foot or on horseback, alone or online with other players, and fully immerse yourself in the grassy plains, suffocating swamps, spiraling mountains, foreboding castles and other sites of grandeur on a scale never seen before in a FromSoftware title.",image:"https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",featured:true},

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

const $ = id => document.getElementById(id);
let activeCategory = "All";
let wishlist = JSON.parse(localStorage.getItem("soulsArchiveWishlist") || "[]");

function gameCard(game){
  return `<article class="game-card" data-game="${game.id}" tabindex="0" role="button" aria-label="View ${game.name}">
    <img src="${game.image}" alt="" loading="lazy">
    <div class="game-card-body"><div class="game-meta">${game.genre} · ${game.year}</div><div class="game-name">${game.name}</div><div class="game-difficulty">${game.difficulty}</div><div class="game-open">VIEW DETAILS ↗</div></div>
  </article>`;
}
function bindCards(root){
  root.querySelectorAll("[data-game]").forEach(card=>{
    const open=()=>openGame(Number(card.dataset.game));
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
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===pageId));
  if(pageId==="wishlist-page")renderWishlist();
  if(pageId==="devices-page")renderDevices();
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

  const details = gameDetails[id] || {};
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
      <h3>PRICE & OFFERS</h3>
      <div class="price-box">
        Store price
        <strong>Not connected yet</strong>
        <span class="subtle">Live regional pricing will be added in a future update.</span>
      </div>
    </section>

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

  showPage("detail-page");
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
