const headerTablet = document.querySelector(".header-tablet");
const headerTop = document.querySelector(".header__top");

if (headerTablet && headerTop) {
  new TransferElements(
    {
      sourceElement: document.querySelector(".header-cart__link"), // что переносим
      breakpoints: {
        768: {
          targetElement: headerTablet, // куда переносим
          targetPosition: 1,
        },
      },
    },
    {
      sourceElement: document.querySelector(".header__favorite"),
      breakpoints: {
        768: {
          targetElement: headerTablet,
          targetPosition: 2,
        },
      },
    },
    {
      sourceElement: document.querySelector(".header__user"),
      breakpoints: {
        768: {
          targetElement: headerTablet,
          targetPosition: 3,
        },
      },
    },
    {
      sourceElement: document.querySelector(".receiving"),
      breakpoints: {
        768: {
          targetElement: headerTop,
          targetPosition: 1,
        },
      },
    }
  );
} else {
  console.error("Ошибка: header-tablet или header__top не найдены в DOM");
}

// if ($(window).width() < 768.99) {
//   $(".header-cart__link").appendTo($(".header-tablet"));
//   $(".header__favorite").appendTo($(".header-tablet"));
//   $(".header__user").appendTo($(".header-tablet"));
//   $(".receiving").appendTo($(".header__top"));
// }
