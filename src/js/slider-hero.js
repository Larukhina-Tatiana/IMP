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
