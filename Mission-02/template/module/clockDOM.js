import { makeDOMwithProperties } from "./dom.js";

export const makeTimeDiv = (time) => {
  const timeDiv = makeDOMwithProperties("div", {
    className: `time time${time}`,
    innerHTML: "|",
  });
  return timeDiv;
};

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
