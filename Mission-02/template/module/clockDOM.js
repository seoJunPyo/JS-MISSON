import { makeDOMwithProperties } from "./dom.js";

// 시간 표시하는 부분 생성
export const makeTimeDiv = (time) => {
  const timeDiv = makeDOMwithProperties("div", {
    className: `time time${time}`,
    innerHTML: "|",
  });
  return timeDiv;
};

// 시침 분침 초침 생성
export const makeClockHands = () => {
  const hour = makeDOMwithProperties("div", {
    className: "hand hour",
  });

  const minute = makeDOMwithProperties("div", {
    className: "hand minute",
  });

  const second = makeDOMwithProperties("div", {
    className: "hand second",
  });

  return [hour, minute, second];
};
