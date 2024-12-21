const products = [
  { title: "Пицца мини с ветчиной и сыром, замороженная, 0.44 кг" },
  { title: "Батон нарезной с кунжутом, 480г" },
  { title: 'Хлеб "Крестьянский" бездрожжевой, 500г' },
  { title: "Гранола Мюсли Bionova ягодные запечённые хрустящие, 400г" },
  { title: '"Хлеб "Крестьянский" бездрожжевой, 500г"' },
  { title: 'Хлеб "Бородинский" тот самій хлеб, 450г' },
  { title: 'Хлеб "Бородинский" Хлебный Дом, 520г' },
  { title: "Сок Ideas тыквенно-апельсиновый, 1л" },
  { title: "Блинчики замороженные Фруктовая Коллекция с малиной" },
];

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#search"),
};
console.log(refs.input);

const listItemsMarkup = createListItemsMarkup(products);
console.log(listItemsMarkup);
// refs.list.innerHTML = listItemsMarkup;

function createListItemsMarkup(items) {
  return items.map((item) => `<li>${item.title}</li>`).join("");
}

// 2. Слушаем изменения фильтра

refs.input.addEventListener("input", onFilterChange);

function onFilterChange(e) {
  const filter = e.target.value.toLowerCase();
  console.log(filter);
  const filterItems = products.filter((t) =>
    t.title.toLowerCase().includes(filter)
  );
  console.log(filterItems);
  const listItemsMarkup = createListItemsMarkup(filterItems);
  // console.log(listItemsMarkup);
  popuLateList(listItemsMarkup);
}

function popuLateList(markup) {
  refs.list.innerHTML = markup;
}
