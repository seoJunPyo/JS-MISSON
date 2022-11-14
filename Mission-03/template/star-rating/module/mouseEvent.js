import { prevSelectedAll } from "./common.js";
import { changeRatingEvent } from "./customEventHandler.js";

export const starConMouseLeave = (e) => {
  const child = [...e.target.children];

  for (let i = 0; i < child.length; i++) {
    child[i].classList.remove("hovered");
  }
};

export const starMouseEnter = (e) => {
  e.target.classList.add("hovered");

  const prevStar = prevSelectedAll(e.target);

  prevStar.forEach((star) => {
    star.classList.add("hovered");
  });
};

export const starMouseClick = (e) => {
  e.target.classList.remove("hovered");
  e.target.classList.add("selected");

  const prevStar = prevSelectedAll(e.target);

  prevStar.forEach((star) => {
    star.classList.remove("hovered");
    star.classList.add("selected");
  });

  changeRatingEvent(e);
};

export const starMouseLeave = (e) => {
  e.target.classList.remove("hovered");
};
