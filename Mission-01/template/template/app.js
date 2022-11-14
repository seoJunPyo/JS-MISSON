// do something!
const get = (target) => {
  return document.querySelector(target);
};

const [toggleBtn, nav, main, active, body] = [
  get(".toggle"),
  get("nav"),
  get("main"),
  get(".active"),
  get("body"),
];

const setLocalData = (key, val) => {
  localStorage.setItem(key, val);
};

const removeActive = () => {
  nav.classList.remove("active");
  main.classList.remove("active");
};

const addActive = () => {
  nav.classList.add("active");
  main.classList.add("active");
};

let toggleStatus = Number(localStorage.getItem("toggleStatus"));
console.log(toggleStatus);

// 토글 버튼으로 nav 여닫기
toggleBtn.onclick = () => {
  if (toggleStatus == 0) {
    addActive();
    toggleStatus = 1;
  } else {
    removeActive();
    toggleStatus = 0;
  }
  setLocalData("toggleStatus", toggleStatus);
};

// 새로고침 혹은 브라우저 재접속시 nav 상태 유지
document.addEventListener("DOMContentLoaded", () => {
  if (toggleStatus == 1) {
    addActive();
    toggleStatus = 1;
  } else {
    removeActive();
    toggleStatus = 0;
  }
  setLocalData("toggleStatus", toggleStatus);
});

// 로드 후 preload 클래스 제거 / body visible 속성 변경
window.onload = () => {
  body.classList.remove("preload");
  body.style.visibility = "visible";
};
