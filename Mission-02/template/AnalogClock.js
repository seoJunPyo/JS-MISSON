import { appendChildList } from "./module/dom.js";
import { makeClockHands, makeTimeDiv } from "./module/clockDOM.js";
import { clockAni } from "./module/clockAni,.js";

const clock = document.querySelectorAll(".analog-clock");
let clockCopy = 0;

//시계 내부 디자인 생성
const AnalogClock = ($container) => {
  for (let i = 1; i <= 12; i++) {
    clock[clockCopy].appendChild(makeTimeDiv(i));
  }
  // 복사할때 마다 복사된 시계안으로 디자인 생성
  appendChildList(clock[clockCopy], makeClockHands());
  clockAni(clockCopy);

  clockCopy++;
};

export default AnalogClock;
