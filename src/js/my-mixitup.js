if (document.querySelector(".tabs-content")) {
  var mixer = mixitup(".tabs-content", {
    load: {
      filter: ".delivery",
    },
  });
}
if (document.querySelector(".catalog__list")) {
  var mixer = mixitup(".catalog__list", {
    load: {
      filter: ".all",
    },
  });
}
if (document.querySelector(".contacts__content")) {
  // if ($(window).width() > 768.99) {
  //   var mixer = mixitup(".contacts__box", {
  //     load: {
  //       filter: ".all",
  //     },
  //   });
  // }
  // if ($(window).width() < 768) {
  var mixer = mixitup(".contacts__box", {
    load: {
      filter: ".map",
    },
  });
}
// }
