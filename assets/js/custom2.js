/////////////
let index = 0,
  interval = 3000;

const rand = (min, max) => 
Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

star.style.animation = "none";
star.offsetHeight;
star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
setTimeout(() => {
  animate(star);
  
  setInterval(() => animate(star), 3000);
}, index++ * (interval / 3))
}

///////////
$.getJSON("https://api.ipify.org?format=json",
function(data) {
  $("#ip").html(data.ip);
})


/////////
let text_el=document.querySelector('div#browser_info')
let hSalam=document.querySelector('div#browser_sholat')
setInterval(()=>{var d=new Date();const jam=d.getHours().toString().padStart(2,0)
const menit=d.getMinutes().toString().padStart(2,0)
const detik=d.getSeconds().toString().padStart(2,0)
if(hSalam<4){hSalam.innerHTML="Selamat Malam"}else if(hSalam<11){hSalam.innerHTML="Selamat Pagi"}else if(hSalam<16){hSalam.innerHTML="Selamat Siang"}else if(hSalam<20){hSalam.innerHTML="Selamat Sore"}
text_el.innerHTML=jam+":"+menit+":"+detik},250)
