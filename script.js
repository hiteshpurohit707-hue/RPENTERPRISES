document.body.style.overflow = "hidden";

// LOADER
// LOCK SCROLL
document.body.style.overflow = "hidden";

let progress = 0;

const loader = document.getElementById("loader");
const progressSpan = document.getElementById("progress");
const circle = document.getElementById("progress-bar");

// circle math
const radius = 90;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;

function setProgress(p){
circle.style.strokeDashoffset = circumference - (p/100)*circumference;
}

// animation
const interval = setInterval(()=>{
progress++;

progressSpan.textContent = progress;
setProgress(progress);

if(progress >= 100){
clearInterval(interval);

// fade out
loader.style.opacity = "0";
loader.style.transition = "opacity 0.6s ease";

setTimeout(()=>{
loader.style.display = "none";
document.body.style.overflow = "auto";
},600);
}

},20);

// SCROLL REVEAL
function reveal(){
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("active");
}
});
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// MENU
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", ()=>{
nav.classList.toggle("active");
});
