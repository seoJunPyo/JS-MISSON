import {
  makeDOMwithProperties,
  get,
  getAll,
  removerClassAll,
} from "../module/common.js";
import { navItems } from "../module/navItems.js";
let categoryID;
let category = { id: categoryID };

const categoryListClick = (e) => {
  const $categoryListItems = getAll(".category-item");
  const categoryListItemsDOMS = [...$categoryListItems];
  categoryID = get(".active").id;

  removerClassAll(categoryListItemsDOMS, "active");
  e.target.classList.add("active");
  console.log(category);
};

const categoryListDOM = () => {
  const ul = makeDOMwithProperties("ul", {});
  navItems.forEach((item) => {
    const categoryListItems = makeDOMwithProperties("li", {
      className: "category-item",
      id: item.id,
      innerHTML: item.title,
      onclick: (e) => {
        categoryListClick(e);
      },
    });
    ul.appendChild(categoryListItems);
  });
  return ul;
};

export const navDOM = () => {
  const nav = makeDOMwithProperties("nav", {
    className: "category-list",
  });

  nav.appendChild(categoryListDOM());

  return nav;
};
