"use strict";

var anchors = document.getElementsByClassName("link");
var burger = document.getElementById("burger");

// Toggles links style
for(var x of anchors){
    x.addEventListener("click", function(){

        for(var x of anchors){
            x.classList.remove("selected");
        }
        this.classList.add("selected");
    })
}

// Toggle links display and burger style
burger.addEventListener("click", function(){
    for(var x of anchors){
        x.classList.toggle("block");
        x.classList.remove("selected");
    }
    this.classList.toggle("rotate");
});

// Change on resize
window.addEventListener("resize", function(){
     for(var x of anchors){
        x.classList.remove("block");
        x.classList.remove("selected");
    }
    burger.classList.remove("rotate");
});


//Swiper review
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
    autoplay: {
      delay: 3000,
  },
  speed: 1000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      1000: {
          slidesPerView: 3,
          slidesPerGroup: 1,
      }
  }

  
});