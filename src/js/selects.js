const selects = document.querySelectorAll(".filter-select");
selects.forEach((el) => {
  new Choices(el, {
    shouldSort: false,
    position: "bottom",
    searchEnabled: false,
  });
});
