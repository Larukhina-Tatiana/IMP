if (document.querySelector(".common-swiper")) {
  var swiperCommon = new Swiper(".common-swiper", {
    slidesPerView: 2,
    spaceBetween: 12,
    // navigation: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      425: {
        slidesPerView: 2.2,
      },
      560: {
        slidesPerView: 2.5,
      },
      691: {
        slidesPerView: 3,
        navigation: {
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        },
      },
      920: {
        slidesPerView: 3.5,
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
