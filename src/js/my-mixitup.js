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
  var mixer = mixitup(".contacts__box", {
    load: {
      filter: ".all",
    },
  });
}
