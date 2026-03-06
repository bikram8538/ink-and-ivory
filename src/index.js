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
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".sellerSwiper", {
  // effect: "coverflow",
  slidesPerView: 1.5,
  spaceBetween: 10,
  loop: true,
  // coverflowEffect: {
  //   rotate: 0,
  //   stretch: 0,
  //   depth: 400,
  //   modifier: 1,
  //   slideShadows: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  /* autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },*/
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
