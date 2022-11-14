import { navDOM } from "./components/Nav.js";
import { appendChildList, get, getAll } from "./module/common.js";
import { getNewsListDOM } from "./components/NewsList.js";

export const $rootDOM = get("#root");
$rootDOM.appendChild(navDOM());

const all = getAll(".category-item")[0];
all.classList.add("active");

const nav = getAll(".category-item");

getNewsListDOM();

/**
 1. nav버튼 클릭시 , categoryID 값이 업데이트
 2. proxy에서 값변경시 , categoryID를 매개변수로 newsList 재랜더링
 3. 재렌더링전에 기존 뉴스 전부 삭제
 */
