import { navDOM } from "./components/Nav.js";
import { appendChildList, get, getAll } from "./module/common.js";
import { newsListConDOM } from "./components/NewsList.js";

const $rootDOM = get("#root");

appendChildList($rootDOM, [navDOM(), newsListConDOM()]);

// newsListDOM(); // do something!
