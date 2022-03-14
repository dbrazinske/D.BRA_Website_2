"use strict";
var sections = document.querySelectorAll(`section`);
var navLi = document.querySelector(`nav .navContainer ul li`);

window.addEventListener(`scroll`, ()=>{
    let current = ``;
    sections.forEach( section => {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 2)){
            current = section.getAttribute("id");
        } 
    });
    console.log(current);
    navLi.forEach( li => {
        li.classList.remove(`active`);
        // // if(a.classList.contains(current)){
        // //     listenerCount.classList.add(`active`);
        // // }
    });
});