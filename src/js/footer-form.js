// import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector(".footer-form"),
  email: document.querySelector("#email"),
  policyСheckbox: document.querySelector("#policy"),
  btn: document.querySelector(".footer-form__btn"),
};

const STORAGE_KEY = "feedback-form-state";
formData = {};

refs.form.addEventListener("submit", onFormSubmit);
// refs.form.addEventListener("input", _throttle(onFormInput, 500));
refs.form.addEventListener("input", onFormInput);
refs.policyСheckbox.addEventListener("change", onPolicyChange);

function onPolicyChange(event) {
  refs.btn.disabled = !event.currentTarget.checked;
}

function onFormSubmit(event) {
  event.preventDefault(); //предотвращает перезагрузку(обновление страниы)

  if (event.currentTarget.elements.email.value === "") {
    alert`Поле должно быть заполнено`;
  } else {
    event.preventDefault();
    // // Сбор данных формы
    // const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) => {
    //   console.log(name, value);
    // });
    refs.form.reset();
    localStorage.removeItem(STORAGE_KEY);

    const alert = document.createElement("div");
    alert.classList.add("footer-form__alert");
    alert.innerText = `Подписка оформлена!`;
    document.body.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}

function onFormInput(e) {
  console.log(e.target.value);

  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

(function restoreFormOutput() {
  const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedFormData) {
    refs.email.value = savedFormData.email;
  }
})();
