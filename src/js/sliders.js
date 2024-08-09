if (document.querySelector(".stock-swiper")) {
  var swiperTvo = new Swiper(".stock-swiper", {
    slidesPerView: 1,
    spaceBetween: 12,
    navigation: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      456: {
        slidesPerView: 2,
        // pagination: {
        //   type: "fraction",
        // },
      },
      690: {
        slidesPerView: 3,
        navigation: {
          nextEl: ".stock-swiper-prev",
          prevEl: ".stock-swiper-next",
        },
      },
      1288: {
        slidesPerView: 4,
        spaceBetween: 16,
        navigation: {
          nextEl: ".stock-swiper-prev",
          prevEl: ".stock-swiper-next",
        },
      },
    },
    on: {
      init: function (swiperTvo) {},
    },
  });
}

const workInsideGalery = document.querySelector(".product__slider-big");

if (workInsideGalery) {
  const workSlider = new Swiper(".product__slider-small", {
    spaceBetween: 16,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    // breakpoints: {
    //   576: {
    //     slidesPerView: 6,
    //     spaceBetween: 10,
    //   },
    //   768: {
    //     slidesPerView: 10,
    //     spaceBetween: 20,
    //   },
    // },
  });
  const workSlidesNav = new Swiper(workInsideGalery, {
    spaceBetween: 20,
    slidesPerView: 1,
    // navigation: {
    //   nextEl: ".work-inside__btn--next",
    //   prevEl: ".work-inside__btn--prev",
    // },
    thumbs: {
      swiper: workSlider,
    },
  });
}

if (document.querySelector(".common-swiper")) {
  var swiperCommon = new Swiper(".common-swiper", {
    slidesPerView: 1,
    spaceBetween: 12,
    navigation: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      456: {
        slidesPerView: 2,
        // pagination: {
        //   type: "fraction",
        // },
      },
      690: {
        slidesPerView: 3,
        navigation: {
          nextEl: ".stock-swiper-prev",
          prevEl: ".stock-swiper-next",
        },
      },
      1288: {
        slidesPerView: 4,
        spaceBetween: 16,
        navigation: {
          nextEl: ".stock-swiper-prev",
          prevEl: ".stock-swiper-next",
        },
      },
    },
    on: {
      init: function (swiperCommon) {},
    },
  });
}

// if (document.querySelector(".fashion-news")) {
//   var swiper = new Swiper(".slider-1", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pag",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-next",
//       prevEl: ".swiper-prev",
//     },
//     breakpoints: {
//       661: {
//         slidesPerView: 2,
//         slidesPerGroup: 2,
//         spaceBetween: 30,
//         pagination: {
//           type: "fraction",
//         },
//       },
//       1024: {
//         slidesPerView: 3,
//         slidesPerGroup: 3,
//         pagination: {
//           type: "fraction",
//           spaceBetween: 30,
//         },
//       },
//     },
//     on: {
//       init: function (swiper) {},
//     },
//   });
// }
