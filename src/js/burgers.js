if (".catalog-menu__btn") {
  $(".catalog-menu__btn-main").on("click", function () {
    $(".btn-main").toggleClass("btn-main-open");
    $(".catalog-menu__ground").toggleClass("catalog-menu__ground--open");
  });
}
//  Закрытие окна меню каталога при клике на любую точку экрана кроме меню каталога

// проверяем клик на окне
window.addEventListener("click", function (event) {
  // проверяем что клик был именно по кнопке "В корзину"
  if (event.target.closest(".catalog-menu")) {
    if ("btn-main-open") {
      $(".btn-main").remove("btn-main-open");
      $(".catalog-menu__ground").remove("catalog-menu__ground--open");
    }
  }
});

// document.addEventListener("click", (e) => {
//   if (!e.target.closest(".catalog-menu")) {
//     $(".btn-main").toggleClass("btn-main-open");
//     $(".catalog-menu__ground").toggleClass("catalog-menu__ground--open");
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  // 1 по клику на боковое меню открывать dropdown
  // 2 по клику (повторному) на эти пункты - закрывать dropdown
  // 3 по клику на любое место сайта, кроме меню - закрывать dropdown

  const catalogBtns = document.querySelectorAll(".catalog-menu__btn-secondary");
  const drops = document.querySelectorAll(".dropdown");
  const ground = document.querySelectorAll(".catalog-menu__ground");
  const mainBtn = document.querySelectorAll(".btn-main");
  const activeBtn = document.querySelectorAll("[data-menu-active]");

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
      ground.forEach((el) => {
        el.classList.remove("catalog-menu__ground--open");
      });
      mainBtn.forEach((el) => {
        el.classList.remove("btn-main-open");
      });
      // console.log(activeBtn);
      $(activeBtn).toggleClass("catalog-menu__btn-secondary--actve");
      // activeBtn.classList.toggle("catalog-menu__btn-secondary--actve");
    }
  });
});
