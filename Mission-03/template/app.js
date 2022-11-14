import StarRating from "./star-rating/index.js";
import { makeDOMwithProperties } from "./star-rating/module/dom.js";

const $containers = [...document.querySelectorAll(".star-rating")];
const $currentRatings = document.querySelectorAll(".current-rating > span");
const linkTags = [...document.querySelectorAll("link")];

$containers.forEach(($container, i) => {
  // star-rating 컨테이너 요소의 참조를 StarRating 함수에 전달해 star 요소들로 구성된 star-rating 요소를 동적 생성한다.
  StarRating($container);

  // 이벤트 'rating-change'를 캐치해 화면에 표시한다.
  $container.addEventListener("rating-change", (e) => {
    const rating = e.detail;
    $currentRatings[i].textContent = rating;
  });
});

//index.html에 Link 태그 생성
const themeCssLinkDOM = makeDOMwithProperties("link", {
  href: "star-rating/theme.css",
  rel: "stylesheet",
});

document.querySelectorAll("link")[linkTags.length - 1].after(themeCssLinkDOM);
