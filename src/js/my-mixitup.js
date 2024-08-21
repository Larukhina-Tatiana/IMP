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
if (document.querySelector(".personal-account__tabs-list")) {
  var mixer = mixitup(".personal-account__box", {
    load: {
      filter: ".order-history",
    },
  });
}
