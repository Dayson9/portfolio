const c= document.querySelector(".contact") 
const imgs= c.querySelectorAll("img")
const bar= document.getElementById('bar')
const nav_c= document.getElementById('nav-content')
const nav= document.getElementById('nav')
var nav_is_opened = false;
const calc_width= (window.innerWidth*0.9);


bar.ontouchstart = () =>{
if(nav_is_opened){
nav.style.transform= "translateX("+calc_width+"px)";
nav_is_opened= false;
}else{
nav.style.transform= "translateX("+(0.0)+"px)";
nav_is_opened= true;
}
}


imgs[0].onclick= ()=>{
window.open("https://www.facebook.com/profile.php?id=100093639788963", "_blank")
}

imgs[1].onclick=()=>{
window.open("https://wa.me/qr/JRD3P272QS5ZO1","_blank")
}
imgs[2].onclick=()=>{
window.open("https://x.com/Dayson848122028?s=09","_blank")
}
imgs[3].onclick = () => {
   window.open("mailto:tundedayson90@gmail.com","_blank")
}
   
