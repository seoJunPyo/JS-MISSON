import {
  makeDOMwithProperties,
  get,
  getAll,
  removerClassAll,
  removeChildAllwithoutNav,
} from "../module/common.js";
import { navItems } from "../module/navItems.js";
import { getNewsListDOM } from "./NewsList.js";

// 프록시 선언
const category = { id: "all" };
const setCategroy = {
  set(category, prop, id) {
    category[prop] = id;
    return id;
  },
};
const categoryProxy = new Proxy(category, setCategroy);
//

//카테고리 메뉴 클릭 이벤트
const categoryListClick = (e) => {
  const $categoryListItems = getAll(".category-item");
  const categoryListItemsDOMS = [...$categoryListItems];

  removerClassAll(categoryListItemsDOMS, "active");
  e.target.classList.add("active");
};

const categoryChange = (e) => {
  removeChildAllwithoutNav($rootDOM);
  categoryProxy.id = e.target.id;
  getNewsListDOM(category.id);
};
//

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
        categoryChange(e);
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
