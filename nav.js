"use strict";
var sections = document.querySelectorAll(`section`);
var navLi = document.querySelectorAll(`nav .navContainer ul li`);

window.addEventListener(`scroll`, ()=> {
    let current = ``;
    sections.forEach( section => {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 2)){
            current = section.getAttribute( `id`);
        } 
    })
    console.log(current);
    navLi.forEach( li => {
        li.classList.remove(`active`);
        if(li.classList.contains(current)){
           li.classList.add(`active`)
        }
    })
})