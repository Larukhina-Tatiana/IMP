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
