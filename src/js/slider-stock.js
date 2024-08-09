if (document.querySelector(".stock-swiper")) {
  var swiperTvo = new Swiper(".stock-swiper", {
    // slidesPerView: "auto",
    slidesPerView: 1,
    spaceBetween: 11,
    loop: true,
    // centeredSlides: true,
    navigation: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      360: {
        slidesPerView: 1.5,
      },
      375: {
        slidesPerView: 1.6,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      610: {
        slidesPerView: 2.5,
        pagination: false,
        navigation: {
          nextEl: ".swiper-nav-prev",
          prevEl: ".swiper-nav-next",
        },
      },
      810: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3.5,
      },
      1288: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
    on: {
      init: function (swiperTvo) {},
    },
  });
}
