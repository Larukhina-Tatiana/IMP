const form = document.forms.formPersonalData;
const btnSubmit = form.save;
const STORAGE_KEY = "feedback-form-state";
formData = {};
let textError = "";

form.addEventListener("submit", onFormSubmit);
// refs.form.addEventListener("input", _throttle(onFormInput, 500));
form.addEventListener("input", onFormInput);
form.addEventListener("reset", onResetForm);

function onFormSubmit(event) {
  event.preventDefault(); //предотвращает перезагрузку(обновление страниы)

  if (validationForm(form)) {
    // alert("Форма проверена");
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData));
  } else {
    event.preventDefault();
    // alert("Форма не прошла валидацию");
  }
}

function validationForm(form) {
  const inputAll = form.querySelectorAll("[data-required]");
  console.log(inputAll);
  let formFalse = 0;
  inputAll.forEach((input) => {
    const inputValue = input.value;
    const inputReg = input.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    // console.log(inputValue, reg);

    if (reg.test(inputValue) !== true) {
      formFalse += 1;
      console.log(formFalse);

      const inputError = input.name;
      onTextError(inputError);
      input.parentElement.insertAdjacentHTML(
        "beforeend",
        `<div class="form__error" style="color: rgb(255, 0, 0); padding: 5px"> ${textError} </div>`
      );
      input.style.boxShadow = "0 0 4px rgb(255, 0, 0)";

      input.addEventListener("focus", function (event) {
        if (input.nextElementSibling) {
          input.nextElementSibling.remove();
          input.style.boxShadow = "";
        }
      });
    }
  });
  return formFalse >= 1 ? false : true;
}

function onTextError(inputError) {
  if (inputError === "name") {
    textError = "Не корректное имя";
    return;
  }
  if (inputError === "phone") {
    textError = "Не корректный номер телефона";
    return;
  }
  // if (inputError === "e-mail") {
  //   textError = "Incorrect email!";
  //   return;
  // }
  // if (inputError === "comment") {
  //   textError = "Incorrect Message!";
  //   return;
  // }
}

function onFormInput(e) {
  console.log(e.target.value);

  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onResetForm(event) {
  // Очистка LS
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

(function restoreFormOutput() {
  const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedFormData) {
    email.value = savedFormData.email;
  }
})();
