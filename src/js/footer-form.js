const refs = {
  form: document.querySelector(".footer-form"),
  email: document.querySelector("#email"),
  policyСheckbox: document.querySelector("#policy"),
  btn: document.querySelector(".footer-form__btn"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.policyСheckbox.addEventListener("change", onPolicyChange);
function onPolicyChange(event) {
  // console.log(event.currentTarget.checked);
  refs.btn.disabled = !event.currentTarget.checked;
}

function onFormSubmit(event) {
  event.preventDefault(); //предотвращает перезагрузку(обновление страниы)

  console.log(event.currentTarget.elements.email.value);
  if (event.currentTarget.elements.email.value === "") {
    alert`Поле должно быть заполнено`;
  } else {
    // // Сбор данных формы
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      console.log(name, value);
    });
    // refs.form.reset();
    const alert = document.createElement("div");
    alert.classList.add("footer-form__alert");
    alert.innerText = `Подписка оформлена!`;
    document.body.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}
