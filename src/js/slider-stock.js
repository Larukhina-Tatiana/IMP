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
