// Иконка фаворит становиться залитой
if (document.querySelector(".favorite")) {
  $(".favorite").on("click", function () {
    $(this).toggleClass("favorite--active");
  });
}
