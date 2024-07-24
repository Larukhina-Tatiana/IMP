if (".catalog-menu__btn") {
  $(".catalog-menu__btn-main").on("click", function () {
    $(".btn-main").toggleClass("btn-main-open");
    $(".catalog-menu__list").toggleClass("catalog-menu__list--open");
  });
  //  Закрытие окна меню каталога при клике на любую точку экрана кроме меню каталога
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".catalog-menu")) {
      $(".btn-main").toggleClass("btn-main-open");
      $(".catalog-menu__list").toggleClass("catalog-menu__list--open");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // 1 по клику на боковое меню открывать dropdown
  // 2 по клику (повторному) на эти пункты - закрывать dropdown
  // 3 по клику на любое место сайта, кроме меню - закрывать dropdown

  const catalogBtns = document.querySelectorAll(".catalog-menu__btn-secondary");
  const drops = document.querySelectorAll(".dropdown");
  catalogBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      let currentBtn = e.currentTarget;
      let dropdown = currentBtn
        .closest(".catalog-menu__item")
        .querySelector(".dropdown");

      catalogBtns.forEach((el) => {
        if (el !== currentBtn) {
          el.classList.remove("catalog-menu__btn-secondary--active");
        }
      });
      drops.forEach((el) => {
        if (el !== dropdown) {
          el.classList.remove("dropdown--active");
        }
      });
      dropdown.classList.toggle("dropdown--active");
      currentBtn.classList.toggle("catalog-menu__btn-secondary--active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".catalog-menu")) {
      catalogBtns.forEach((el) => {
        el.classList.remove("catalog-menu__btn-secondary--active");
      });

      drops.forEach((el) => {
        el.classList.remove("dropdown--active");
      });
    }
  });
});
