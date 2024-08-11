const heroSliderSpeed = 1500;

const bodyStyles = window.getComputedStyle(document.body);
const fooBar = bodyStyles.getPropertyValue("--hero-slider-speed"); //get

document.body.style.setProperty("--hero-slider-speed", heroSliderSpeed + "ms"); //set

const heroSlider = new Swiper(".hero-slider", {
  slidesPerView: 1,
  // loop: true,
  // infinite: true,
  // fade: true,
  navigation: {
    nextEl: ".hero-arrow--next",
    prevEl: ".hero-arrow--prev",
  },
  // speed: heroSliderSpeed,
  // autoplay: {
  //   delay: 1000,
  // },
  // breakpoints: {
  //   768: {},
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

if (document.querySelector(".common-swiper")) {
  var swiperCommon = new Swiper(".common-swiper", {
    slidesPerView: 2,
    spaceBetween: 12,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        navigation: false,
      },
      425: {
        slidesPerView: 2.2,
      },
      560: {
        slidesPerView: 2.5,
      },
      691: {
        slidesPerView: 3,
        navigation: true,
      },
      920: {
        slidesPerView: 3.5,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
    on: {
      init: function (swiperCommon) {},
    },
  });
}

if (document.querySelector(".stock-swiper")) {
  var swiperStock = new Swiper(".stock-swiper", {
    slidesPerView: 1,
    spaceBetween: 12,
    navigation: {
      nextEl: ".stock-next",
      prevEl: ".stock-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      360: {
        slidesPerView: 1.5,
        navigation: false,
      },
      425: {
        slidesPerView: 1.7,
      },
      515: {
        slidesPerView: 2,
      },
      625: {
        slidesPerView: 2.2,
      },
      691: {
        slidesPerView: 2.5,
        navigation: true,
      },
      768: {
        slidesPerView: 2.7,
      },
      920: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 16,
      },
      1100: {
        slidesPerView: 3.7,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
    on: {
      init: function (swiperStock) {},
    },
  });
}
