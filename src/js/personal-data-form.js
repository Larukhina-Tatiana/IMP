const form = document.forms.formPersonalData;
const btnSubmit = form.save;

let textError = "";

form.addEventListener("submit", onFormSubmit);
// refs.form.addEventListener("input", _throttle(onFormInput, 500));

form.addEventListener("reset", onFormReset);

function onFormSubmit(event) {
  event.preventDefault(); //предотвращает перезагрузку(обновление страниы)

  if (validationForm(form)) {
    alert("Форма проверена");
    formData = new FormData(form);
    console.log(Object.fromEntries(formData));
  } else {
    event.preventDefault();
    alert("Форма не прошла валидацию");
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

// function onFormInput(event) {
//   console.log(event.target.value);

//   formData[event.target.name] = event.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

function onFormReset(event) {
  // Очистка LS
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log("Форма была сброшена!");
}

// Возврат из LS при обновлении страницы
// function restoreFormOutput() {
//   // const form = document.forms.formPersonalData;
//   if (localStorage.getItem(STORAGE_KEY)) {
//     formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     console.log(formData);
//     for (let key in formData) {
//       form.elements[key].value = formData[key].trim();
//     }
//   }
// }
const STORAGE_KEY = "feedback-form-state";
let formData = {};
const formLs = document.querySelector("#formPersonalData");
formLs.addEventListener("input", onFormInput);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Возврат из LS при обновлении страницы
(function populateFormOutput() {
  if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(formData);
    for (let key in formData) {
      if (
        formLs.elements[key].type === "chekbox" &&
        formLs.elements[key].value === "on"
      ) {
        formLs.elements[key].checked = true;
      } else {
        formLs.elements[key].value = formData[key];
      }
    }
  }
})();
