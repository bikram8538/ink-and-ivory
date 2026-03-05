var swiper = new Swiper(".bookSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 5
    }
  }
});
