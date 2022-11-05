// do something!
const toggleBtn = document.getElementsByClassName("toggle")[0];
const nav = document.getElementsByTagName("nav")[0];
const main = document.getElementsByTagName("main")[0];
const active = document.getElementsByClassName("active");
const body = document.getElementsByTagName("body")[0];

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
