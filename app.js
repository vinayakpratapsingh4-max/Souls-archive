const games = [
{id:1,name:"Elden Ring",genre:"Souls",year:2022,studio:"FromSoftware",difficulty:"Hard",platforms:["PC","PlayStation 4","PlayStation 5","Xbox"],description:"A vast dark fantasy open world filled with ancient secrets, dangerous enemies and legendary bosses.",image:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=85",featured:true},
{id:2,name:"Dark Souls III",genre:"Souls",year:2016,studio:"FromSoftware",difficulty:"Very hard",platforms:["PC","PlayStation 4","Xbox"],description:"A fading kingdom, powerful lords and a beautifully atmospheric dark fantasy adventure.",image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&q=85",featured:true},
{id:3,name:"Sekiro: Shadows Die Twice",genre:"Souls",year:2019,studio:"FromSoftware",difficulty:"Very hard",platforms:["PC","PlayStation 4","Xbox"],description:"A shinobi's journey of precision, swordplay and intense one-on-one combat.",image:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=85"},
{id:4,name:"Bloodborne",genre:"Souls",year:2015,studio:"FromSoftware",difficulty:"Hard",platforms:["PlayStation 4"],description:"Hunt through a gothic city where terrifying secrets hide behind every corner.",image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&q=85"},
{id:5,name:"Lies of P",genre:"Soulslike",year:2023,studio:"NEOWIZ",difficulty:"Hard",platforms:["PC","PlayStation 4","PlayStation 5","Xbox"],description:"A twisted retelling of Pinocchio with mechanical enemies and challenging combat.",image:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=85",featured:true},
{id:6,name:"Hollow Knight",genre:"Metroidvania",year:2017,studio:"Team Cherry",difficulty:"Challenging",platforms:["PC","PlayStation 4","Xbox","Nintendo Switch"],description:"Explore a mysterious underground kingdom in this atmospheric 2D adventure.",image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&q=85",featured:true},
{id:7,name:"Nine Sols",genre:"Metroidvania",year:2024,studio:"Red Candle Games",difficulty:"Hard",platforms:["PC","PlayStation 4","PlayStation 5","Xbox","Nintendo Switch"],description:"A hand-drawn action platformer with deflection-focused combat and science-fantasy lore.",image:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=85"},
{id:8,name:"Lords of the Fallen",genre:"Soulslike",year:2023,studio:"CI Games",difficulty:"Hard",platforms:["PC","PlayStation 5","Xbox"],description:"Journey through two parallel realms in a brutal dark fantasy world.",image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&q=85"},
{id:9,name:"Nioh 2",genre:"Soulslike",year:2020,studio:"Team Ninja",difficulty:"Very hard",platforms:["PC","PlayStation 4","PlayStation 5"],description:"A demanding action RPG blending samurai combat, yokai abilities and deep character builds.",image:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=85"}
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
function openGame(id){
  const game=games.find(g=>g.id===id);if(!game)return;
  const saved=wishlist.includes(id);
  $("game-detail").innerHTML=`
    <img class="detail-cover" src="${game.image}" alt="${game.name}">
    <div class="detail-kicker eyebrow">${game.genre.toUpperCase()} · ${game.year}</div>
    <h1 class="detail-title">${game.name}</h1><p class="subtle">${game.studio}</p>
    <div class="pills"><span class="pill">${game.difficulty}</span><span class="pill">${game.genre}</span></div>
    <section class="detail-section"><h3>The journey</h3><p class="detail-description">${game.description}</p></section>
    <section class="detail-section"><h3>Platform availability</h3><div class="pills">${game.platforms.map(p=>`<span class="pill">${p}</span>`).join("")}</div></section>
    <section class="detail-section"><h3>Price & offers</h3><div class="price-box">Store price<strong>Not connected yet</strong><span class="subtle">Live regional pricing will be added in a future update.</span></div></section>
    <button class="save-button" id="save-game">${saved?"♥ REMOVE FROM WISHLIST":"♡ ADD TO WISHLIST"}</button>
    <p class="fine-print">Introductory game information. Verify platform availability and prices with the publisher or store before purchasing.</p>`;
  $("save-game").addEventListener("click",()=>{
    wishlist=wishlist.includes(id)?wishlist.filter(x=>x!==id):[...wishlist,id];
    saveWishlist();openGame(id);notify(wishlist.includes(id)?"Added to wishlist":"Removed from wishlist");
  });
  showPage("detail-page");
}
function renderDevices(){
  const platform=$("platform-select").value;
  const matches=games.filter(g=>g.platforms.includes(platform));
  $("device-results").innerHTML=`<p class="eyebrow">${matches.length} GAMES LISTED</p>`+
    (matches.length?matches.map(g=>`<div class="result-row"><span>${g.name}</span><button class="text-button" data-open="${g.id}">DETAILS →</button></div>`).join(""):"<p class='subtle'>No games in this starter catalogue are listed for this platform.</p>");
  $("device-results").querySelectorAll("[data-open]").forEach(b=>b.addEventListener("click",()=>openGame(Number(b.dataset.open))));
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
