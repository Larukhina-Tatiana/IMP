const form = document.querySelector(".personal-data__form");
const email = document.querySelector("#email");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault(); //предотвращает перезагрузку(обновление страниы)
  const formElements = event.currentTarget.elements;
  // console.dir(event.currentTarget.elements);

  const mail = formElements.email;
  const password = formElements.password;
  // Сбор данных формы
  const formData = new FormData(event.currentTarget);
  console.log(formData);
  formData.forEach((name, value) => {
    console.log(name, value);
  });
}
