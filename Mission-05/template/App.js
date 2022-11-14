import { navDOM } from "./components/Nav.js";
import { appendChildList, get, getAll } from "./module/common.js";
import { getNewsListDOM } from "./components/NewsList.js";

const $rootDOM = get("#root");
$rootDOM.appendChild(navDOM());

const all = get(".category-item");
all.classList.add("active");

const categoryID = get(".active").id;
let category = { id: categoryID };

const nav = getAll(".category-item");

getNewsListDOM(category.id);
