import { makeDOMwithProperties } from "./module/dom.js";
import {
  starConMouseLeave,
  starMouseEnter,
  starMouseClick,
  starMouseLeave,
} from "./module/mouseEvent.js";
// do something!
let MaxRating = [];
let copyStarRating = 0;

const $containers = [...document.querySelectorAll(".star-rating")];
const linkTags = [...document.querySelectorAll("link")];

// 컨테이너별 star 갯수 배열로 반환
$containers.forEach((con) => {
  MaxRating.push(con.getAttribute("data-max-rating"));
});

const StarRating = ($container) => {
  //Link 태그 생성
  const themeCssLinkDOM = makeDOMwithProperties("link", {
    href: "star-rating/theme.css",
    rel: "stylesheet",
  });

  document.querySelectorAll("link")[linkTags.length - 1].after(themeCssLinkDOM);

  //컨테이너 생성 - leave 이벤트
  const StarRatingContainer = makeDOMwithProperties("div", {
    className: "star-rating-container",
    onmouseleave: (e) => {
      starConMouseLeave(e);
    },
  });

  //star 아이콘 삽입 - 이벤트 핸들러도 있다구
  for (let i = 0; i < MaxRating[copyStarRating]; i++) {
    const star = makeDOMwithProperties("i", {
      className: "bx bxs-star",
      id: i + 1,
      onmouseenter: (e) => {
        starMouseEnter(e);
      },
      onclick: (e) => {
        starMouseClick(e);
      },
      onmouseleave: (e) => {
        starMouseLeave(e);
      },
    });
    StarRatingContainer.appendChild(star);
  }

  $container.appendChild(StarRatingContainer);

  //con박스 인덱싱
  copyStarRating++;
};

export default StarRating;
