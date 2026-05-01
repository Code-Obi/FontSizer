"use strict";
let p1 = document.getElementsByTagName("p")[0];
let p2 = document.getElementsByTagName("p")[1];
let slider = document.getElementsByTagName("input")[0];
slider.addEventListener("input",()=>{
    let a = slider.value;
    p1.style.display = "block";
    p1.style.fontSize = a+"px";
    p2.innerHTML = `Your Font Size Is: ${a}`;
});