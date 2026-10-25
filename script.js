const langToggle=document.getElementById('langToggle');
const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
let currentLang='ar';
function setLanguage(lang){
  currentLang=lang;
  const english=lang==='en';
  document.documentElement.lang=lang;
  document.documentElement.dir=english?'ltr':'rtl';
  langToggle.textContent=english?'عربي':'EN';
  document.querySelectorAll('[data-ar][data-en]').forEach(el=>{
    el.innerHTML=english?el.dataset.en:el.dataset.ar;
  });
  nav.classList.remove('open');
}
langToggle.addEventListener('click',()=>setLanguage(currentLang==='ar'?'en':'ar'));
menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.game-card').forEach(card=>{
    card.hidden=btn.dataset.filter!=='all'&&card.dataset.category!==btn.dataset.filter;
  });
}));
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('.game-image img').forEach(img=>img.addEventListener('error',()=>{
  img.style.display='none';
  img.parentElement.classList.add('image-unavailable');
},{once:true}));
document.querySelector('.tiktok-link').addEventListener('click',event=>{
  if(event.currentTarget.getAttribute('href')==='YOUR_TIKTOK_LINK'){
    event.preventDefault();
    alert(currentLang==='ar'?'ضيفي رابط صفحتك على تيك توك داخل index.html بدل YOUR_TIKTOK_LINK أولاً.':'Add your TikTok profile URL in index.html first, replacing YOUR_TIKTOK_LINK.');
  }
});
