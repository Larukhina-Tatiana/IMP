if (document.querySelector(".common-swiper")) {
  var swiperCommon = new Swiper(".common-swiper", {
    slidesPerView: 2.2,
    spaceBetween: 12,
    // navigation: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      425: {
        slidesPerView: 2.5,
      },
      560: {
        slidesPerView: 3,
      },
      691: {
        slidesPerView: 3.3,
        navigation: {
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        },
      },
      920: {
        slidesPerView: 3.7,
        navigation: {
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        },
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 24,
        navigation: {
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        },
      },
    },
    on: {
      init: function (swiperCommon) {},
    },
  });
}
