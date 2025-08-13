// cc360-reviews-vlite.js - Optimized version
const PLACEHOLDER='avatar-placeholder.svg',STAR='<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2.3 15 8l6.6.9-4.8 4.6 1.1 6.5L12 17.9 6.1 20l1.1-6.5-4.8-4.6L9 8z"/></svg>';

// Use preloaded data or fallback to fetch
const all = window.reviewsData || await fetch('assets/data/reviews.json').then(r=>r.json());
// guard if counters are not present in DOM
const totalEl = document.getElementById('c360-total');
const avgEl   = document.getElementById('c360-avg');
if (totalEl) totalEl.textContent = all.length;
if (avgEl)   avgEl.textContent   = (all.reduce((s,r)=>s+(+r.stars||0),0)/all.length).toFixed(2);

const track   = document.querySelector('.c360-reviews-track'),
      prevBtn = document.querySelector('.c360-prev'),
      nextBtn = document.querySelector('.c360-next'),
      VIS     = 12;                         // only 12 slides in memory
let start = 0;                              // start index in all[]

function tpl(r,i){
  const av = r.avatar.includes(PLACEHOLDER)
      ? `<span class="c360-init" style="background:hsl(${i*37%360} 70% 50%)">${r.name[0]}</span>`
      : `<img class="c360-avatar" src="${r.avatar}" alt="${r.name}" loading="lazy">`;
  return `<div class="c360-card">
    <div class="c360-head">${av}
      <div><div class="c360-name">${r.name}</div>
           <div class="c360-date">${new Date(r.date).toLocaleDateString()}</div>
           <div class="c360-stars">${STAR.repeat(r.stars)}<span>${r.stars}.0</span></div></div>
    </div>
    <div class="c360-title">${r.title??''}</div>
    <div class="c360-text clamp">${r.text}</div>
    <button class="c360-toggle" type="button">Read more</button>
  </div>`;
}

/* initial render */
track.innerHTML = all.slice(0,VIS).map(tpl).join('');
let width = track.children[0].offsetWidth + parseInt(getComputedStyle(track).gap);

/* prev/next handlers */
function render(dir){
  start = (start + dir + all.length) % all.length;
  const slice = [];
  for(let i=0;i<VIS;i++) slice.push(all[(start+i)%all.length]);
  track.innerHTML = slice.map(tpl).join('');
  track.style.transform='translateX(0)';
  width = track.children[0].offsetWidth + parseInt(getComputedStyle(track).gap);
}
prevBtn.onclick = ()=>render(-1);
nextBtn.onclick = ()=>render(+1);

let auto = setInterval(()=>render(+1),5000);
[prevBtn,nextBtn,track].forEach(el=>{
  el.onmouseenter=()=>clearInterval(auto);
  el.onmouseleave=()=>auto=setInterval(()=>render(+1),5000);
});

/* read-more toggle (using event-delegation on track) */
track.addEventListener('click',e=>{
  if(!e.target.matches('.c360-toggle')) return;
  const t=e.target.previousElementSibling;
  const open=t.classList.toggle('open');         // flip
  t.classList.toggle('clamp',!open);
  e.target.textContent=open?'Show less':'Read more';
});