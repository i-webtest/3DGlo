(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let l=0;const c=()=>{console.log("Таймер работает!");let e=(()=>{let e=(new Date("24 march 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=e.hours,n.textContent=e.minutes,o.textContent=e.seconds,t.textContent<10&&(t.textContent="0"+t.textContent),n.textContent<10&&(n.textContent="0"+n.textContent),o.textContent<10&&(o.textContent="0"+o.textContent),e.timeRemaining<=0&&(t.textContent="00",n.textContent="00",o.textContent="00",clearInterval(l))};c(),l=setInterval(c,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),n.addEventListener("click",l),o.forEach((e=>e.addEventListener("click",l)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),o=e.querySelector(".popup-content"),l=window.screen.width;console.log(l),t.forEach((t=>{t.addEventListener("click",(()=>{let t,n=0;e.style.display="block",o.style.top="-50%";const c=()=>{n+=3,t=requestAnimationFrame(c),n<25?o.style.top=n+"%":cancelAnimationFrame(t),l<768&&(e.style.display="block",o.style.top="20%")};c()}))})),n.addEventListener("click",(()=>{e.style.display="none"}))})()})();