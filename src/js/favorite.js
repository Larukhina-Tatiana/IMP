// Иконка фаворит становиться залитой
if (document.querySelector(".card-favorite")) {
  $(".card-favorite").on("click", function () {
    $(this).toggleClass("card-favorite--active");
  });
}
