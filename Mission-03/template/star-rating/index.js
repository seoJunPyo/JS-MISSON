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

// 컨테이너별 star 최대갯수 배열로 반환
$containers.forEach((con) => {
  MaxRating.push(con.getAttribute("data-max-rating"));
});

const StarRating = ($container) => {
  //컨테이너 생성 - leave 이벤트 (컨테이너에서 커서가 벗어날때, star의 hovered 스타일 제거)
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

  //con박스 인덱싱 (컨테이너에 지정된 maxrating 만큼 별 생성할 수 있도록 인덱스 변경)
  copyStarRating++;
};

export default StarRating;
