"use strict";



const navIco=document.querySelector("#header .nav-ico input");
const bigMenu=document.querySelector("#header .big-menu");
navIco.addEventListener("click",function(){
    bigMenu.classList.toggle("active")
})