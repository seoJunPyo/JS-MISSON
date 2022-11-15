import { navDOM } from "./components/Nav.js";
import { get, getAll, removeChildAllwithoutNav } from "./module/common.js";
import { getNewsListDOM } from "./components/NewsList.js";

//DOM 생성
export const $rootDOM = get("#root");
$rootDOM.appendChild(navDOM());

const navAllTab = getAll(".category-item")[0];
navAllTab.classList.add("active");

getNewsListDOM();
//

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

// nav 선택요소 변경시 이벤트
const navList = get(".category-list");
const navListOnChange = () => {
  const active = get(".active");

  removeChildAllwithoutNav($rootDOM);
  categoryProxy.id = active.id;
  getNewsListDOM(category.id);
};

const navObserver = new MutationObserver(navListOnChange);

const navObserverConfig = {
  attributes: true,
  subtree: true,
};

navObserver.observe(navList, navObserverConfig);
//
