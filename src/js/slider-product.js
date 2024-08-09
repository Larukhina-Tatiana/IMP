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
