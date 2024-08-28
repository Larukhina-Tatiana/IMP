const btnCart = document.querySelectorAll(".btn-cart");
const cartList = document.querySelector(".cart__list");
const cart = document.querySelector(".header-cart__link");
const cartQuantity = cart.querySelector(".header-cart__quantity");
const fullPrice = document.querySelector(".fullprice");
const fullQuantity = document.querySelector(".fullquantity");
let price = 0;

// Вспомогательные функции
const randomId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

const priceWithoutSpaces = (str) => {
  return str.replace(/\s/g, "");
};

const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
};
// <div class="cart-sale sale">"${sale}"</div>
const generateCartProduct = (
  // sale,
  img,
  title,
  availability,
  cardPrice,
  cardPriceOld,
  fullprice,
  fullquantity,
  price,
  id
) => {
  return `
              <li class="cart__item">
            <article class="cart__card cart-filling" data-id="${id}">

              <a class="cart-filling__link-img" href="./page-product.html">
                <img class="cart-filling__img" src="${img}" loading="lazy" decoding="async"
                  alt='${title}'>
              </a>
              <div>
                <div class="cart-filling__inner">

                  <a class="cart-filling__link-title" href="./page-product.html">
                    <h6 class="title section-h6">
                      ${title}
                    </h6>
                  </a>
                  <span class="cart-filling__span card__span card-availability">${availability}</span>
                </div>
                <div class="cart__inner">
                  <span class="card__price card__price--red">${normalPrice(
                    cardPrice
                  )}</span>
                  <span class="card__span card__price-old">${normalPrice(
                    cardPriceOld
                  )}</span>
                </div>
                <div class="stepper">
                  <button class="stepper__btn stepper__btn--up" aria-label="Увеличить количество">
                    +
                  </button>
                  <label class="stepper__field">
                    <input type="text" value="1" maxlength="3" class="stepper__input">
                    <span class="stepper__text">шт</span>
                  </label>
                  <button class="stepper__btn stepper__btn--down stepper__btn--disabled"
                    aria-label="Уменьшить количество">
                    -
                  </button>
                </div>
                <button class="cart__favorite favorite">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" fill="none">
                    <path fill="currentColor"
                      d="M20.176 2.21A6.165 6.165 0 0 0 15.764.358c-1.667 0-3.24.66-4.417 1.856a.478.478 0 0 1-.68 0l-.01-.01A6.172 6.172 0 0 0 6.238.349c-1.667 0-3.23.655-4.408 1.852A6.32 6.32 0 0 0 0 6.672C0 8.36.652 9.947 1.834 11.14l8.503 8.61a.948.948 0 0 0 1.35 0l8.48-8.596A6.346 6.346 0 0 0 22 6.682a6.317 6.317 0 0 0-1.824-4.472Z" />
                  </svg>
                </button>

                <div>
                  <p class="card__span price fullprice">${normalPrice(
                    fullprice
                  )}</p>
                  <p class="card__span price fullquantity">${fullquantity}</p>
                </div>
                <button class="cart__delite" aria-label="Удалить товар">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <path
                      d="M21.49 5.655c.593 0 .988.395.988.988s-.395.988-.988.988H7.655c-.593 0-.988-.395-.988-.988s.395-.988.988-.988h3.953l.988-.988h3.953l.988.988h3.953zm-8.694 18.776H9.632a1.982 1.982 0 0 1-1.976-1.976V9.608h13.835v3.558a8.47 8.47 0 0 0-3.36.395v-1.187h-1.482v1.839a8.475 8.475 0 0 0-4.249 6.191v-8.03h-1.482v9.388h1.399a8.45 8.45 0 0 0 .481 2.668zm7.988 4.236a7.06 7.06 0 1 1 0-14.118 7.06 7.06 0 0 1 0 14.118zm1.298-7.248 1.633-1.633a.919.919 0 0 0-1.298-1.298l-1.633 1.633-1.633-1.633a.919.919 0 0 0-1.298 1.298l1.633 1.633-1.633 1.633a.919.919 0 0 0 1.298 1.298l1.633-1.633 1.633 1.633a.919.919 0 0 0 1.298-1.298l-1.633-1.633z" />
                  </svg>
                </button>
              </div>
            </article>
          </li>
	`;
};

btnCart.forEach((el) => {
  el.closest(".card").setAttribute("data-id", randomId());
  el.addEventListener("click", (e) => {
    let self = e.currentTarget;
    let parent = self.closest(".card");
    let id = parent.dataset.id;
    console.log(id);
    let img = parent.querySelector(".card__img").getAttribute("src");
    console.log(img);
    // let sale = parent.querySelector(".sale").textContent;
    // console.log(sale);
    let title = parent.querySelector(".title").textContent;
    console.log(title);
    let availability = parent.querySelector(".card-availability").textContent;
    console.log(availability);
    // let cardPrice = parent.querySelector(".price").textContent;
    // let cardPriceOld = parent.querySelector(".card__price-old").textContent;

    let priceString = priceWithoutSpaces(
      parent.querySelector(".price").textContent
    );
    console.log(priceString);
    let priceNumber = parseInt(
      priceWithoutSpaces(parent.querySelector(".price").textContent)
    );
    console.log(priceNumber);
    let priceOldString = priceWithoutSpaces(
      parent.querySelector(".card__price-old").textContent
    );
    console.log(priceOldString);
    let priceOldNumber = parseInt(
      priceWithoutSpaces(parent.querySelector(".card__price-old").textContent)
    );
    console.log(priceOldNumber);

    // plusFullPrice(priceNumber);

    // printFullPrice();

    // cartProductsList
    //   .querySelector(".simplebar-content")
    //   .insertAdjacentHTML(
    //     "afterbegin",
    //     generateCartProduct(img, title, priceString, id)
    //   );
    // printQuantity();

    // self.disabled = true;
  });
});
