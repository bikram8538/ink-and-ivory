const toggle = document.querySelector(".toggler");
const navCollapsed = document.querySelector(".navbar-collapsed");
const menuIcon = document.querySelector(".menu-icon");

toggle.addEventListener("click", () => {
  navCollapsed.classList.toggle("top-20");

  // Change Icon
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});
var swiper = new Swiper(".bookSwiper", {
  slidesPerView: 5,
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  initialSlide: 3,
  watchSlidesProgress: true,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  // /*
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // */
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

  on: {
    slideChange: function () {
      // remove old classes
      document.querySelectorAll(".swiper-slide").forEach((slide) => {
        slide.classList.remove("next2", "prev2", "next3", "prev3");
      });

      const slides = this.slides;
      const active = this.activeIndex;

      if (slides[active + 2]) {
        slides[active + 2].classList.add("next2");
      }
      if (slides[active + 3]) {
        slides[active + 3].classList.add("next3");
      }

      if (slides[active - 2]) {
        slides[active - 2].classList.add("prev2");
      }
      if (slides[active - 3]) {
        slides[active - 3].classList.add("prev3");
      }
      /* ---------- CHANGE BANNER BACKGROUND ---------- */
      const banner = document.getElementById("bannerSection");
      const activeSlide = this.slides[this.activeIndex];
      const bg = activeSlide.dataset.bg;

      if (bg) {
        banner.style.backgroundImage = `url(${bg})`;
      }
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
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
