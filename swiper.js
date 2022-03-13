"use strict";

//Swiper review
const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: false,
    autoplay: {
      delay: 3000,
  },
  speed: 1000,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      1025: {
          slidesPerView: 3,
          slidesPerGroup: 1,
      }
  }
});