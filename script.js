// فتح فيسبوك
function goToFacebook(){window.open("https://www.facebook.com/share/16zk7kQtmw/","_blank");}

// Scroll animation
const elements=document.querySelectorAll(".fade-up,.fade-left,.fade-right");
function reveal(){
const trigger=window.innerHeight*0.85;
elements.forEach(el=>{
const top=el.getBoundingClientRect().top;
if(top<trigger){el.classList.add("show");}
});
}
window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);

// Loader
window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});
