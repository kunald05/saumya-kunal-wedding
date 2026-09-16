const PASSCODE = 'SAUMYA-KUNAL';
const gate = document.getElementById('gate');
const invite = document.getElementById('invite');
const form = document.getElementById('gate-form');
const input = document.getElementById('passcode');
const error = document.getElementById('gate-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value.trim().toUpperCase() === PASSCODE) {
    gate.classList.add('hidden');
    invite.classList.remove('hidden');
    sessionStorage.setItem('sk-invite-open', '1');
    window.scrollTo(0, 0);
    startExperience();
  } else {
    error.textContent = 'That passcode does not match. Please try again.';
    input.select();
  }
});

function startExperience(){
  initReveal();
  initCountdown();
  initViewer();
}

if(sessionStorage.getItem('sk-invite-open') === '1'){
  gate.classList.add('hidden');
  invite.classList.remove('hidden');
  startExperience();
}

function initReveal(){
  const items = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){ items.forEach(x=>x.classList.add('visible')); return; }
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{ if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)} });
  },{threshold:.12});
  items.forEach(x=>observer.observe(x));
}

function initCountdown(){
  const target = new Date('2026-11-26T12:14:00+05:30').getTime();
  const els = Object.fromEntries([...document.querySelectorAll('[data-unit]')].map(x=>[x.dataset.unit,x]));
  const tick=()=>{
    let diff=Math.max(0,target-Date.now());
    const days=Math.floor(diff/86400000); diff%=86400000;
    const hours=Math.floor(diff/3600000); diff%=3600000;
    const minutes=Math.floor(diff/60000); diff%=60000;
    const seconds=Math.floor(diff/1000);
    els.days.textContent=String(days).padStart(2,'0');
    els.hours.textContent=String(hours).padStart(2,'0');
    els.minutes.textContent=String(minutes).padStart(2,'0');
    els.seconds.textContent=String(seconds).padStart(2,'0');
  };
  tick(); setInterval(tick,1000);
}

function initViewer(){
  const img=document.getElementById('invite-page');
  const number=document.getElementById('page-number');
  const bar=document.getElementById('progress-bar');
  const pages=Array.from({length:7},(_,i)=>`assets/page-${i+1}.jpg`);
  let index=0;
  const render=()=>{
    img.src=pages[index];
    img.alt=`Wedding invitation page ${index+1}`;
    number.textContent=String(index+1).padStart(2,'0');
    bar.style.width=`${((index+1)/pages.length)*100}%`;
  };
  document.querySelector('.viewer-arrow.prev').addEventListener('click',()=>{index=(index+pages.length-1)%pages.length;render()});
  document.querySelector('.viewer-arrow.next').addEventListener('click',()=>{index=(index+1)%pages.length;render()});
  let startX=0;
  img.parentElement.addEventListener('touchstart',e=>startX=e.changedTouches[0].clientX,{passive:true});
  img.parentElement.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>45){index=(index+(dx<0?1:-1)+pages.length)%pages.length;render()}},{passive:true});
  render();
}
