import { appendChildList } from "./module/dom.js";
import { makeClockHands, makeTimeDiv } from "./module/clockDOM.js";
import { clockAni } from "./module/clockAni,.js";

const clock = document.querySelectorAll(".analog-clock");
let clockCopy = 0;

const AnalogClock = ($container) => {
  for (let i = 1; i <= 12; i++) {
    clock[clockCopy].appendChild(makeTimeDiv(i));
  }
  appendChildList(clock[clockCopy], makeClockHands());
  clockAni(clockCopy);

  clockCopy++;
};

export default AnalogClock;
