// Иконка фаворит становиться залитой
if (document.querySelector(".card__favorite")) {
  $(".card__favorite").on("click", function () {
    $(this).toggleClass("card__favorite--active");
  });
}
