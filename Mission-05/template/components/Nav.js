import {
  makeDOMwithProperties,
  getAll,
  removerClassAll,
} from "../module/common.js";
import { navItems } from "../module/navItems.js";

//카테고리 메뉴 클릭 이벤트
const categoryListClick = (e) => {
  const $categoryListItems = getAll(".category-item");
  const categoryListItemsDOMS = [...$categoryListItems];

  removerClassAll(categoryListItemsDOMS, "active");
  e.target.classList.add("active");
};

// Nav 생성
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
//
