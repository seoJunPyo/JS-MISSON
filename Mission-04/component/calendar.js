import {
  makeDOMwithProperties,
  removeChildAll,
} from "../module/common/common.js";
import {
  dateColor,
  dateBoxhoverStyle,
  prev_nextDateClick,
  todaySelecter,
} from "../module/dateBox.js";
import { monthHandler } from "../module/monthHandler.js";
import { pickDate } from "../module/pickDate.js";

let date = new Date();
const MonthDOM = document.querySelectorAll(".month");
const YearDOM = document.querySelectorAll(".year");
const calendarGrid = document.querySelectorAll(".calendar-grid");

export const calendar = (i = 0) => {
  // 자식요소 삭제먼저하기
  removeChildAll(calendarGrid[0]);

  // month 핸들
  date.setMonth(date.getMonth() + i);
  monthHandler(date);

  const thisYearValue = date.getFullYear();
  const thisMonthValue = date.getMonth();
  const thisMonthText = date.toLocaleString("en-US", { month: "long" });

  // 월 년도 nav영역에 표기
  MonthDOM[0].innerHTML = thisMonthText;
  YearDOM[0].innerHTML = thisYearValue;

  // 이번달, 저번달 , 다음 달 날짜 받아서 배열에 넣기
  const prevLast = new Date(thisYearValue, thisMonthValue, 0);
  const thisLast = new Date(thisYearValue, thisMonthValue + 1, 0);

  const PLDate = prevLast.getDate();
  const TLDate = thisLast.getDate();

  const PLDay = prevLast.getDay();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);

  // 모두합친 일자 배열 div 생성해서 값 넣기
  dates.forEach((date) => {
    const dateBox = makeDOMwithProperties("div", {
      innerHTML: `<div class ="date-text">${date}</div>`,
      className: "date-box",
      id: date,
    });
    calendarGrid[0].appendChild(dateBox);
  });

  // date박스 스타일링
  const dateBoxs = [...document.querySelectorAll(".date-box")];
  const dateTexts = [...document.querySelectorAll(".date-text")];

  dateColor(dateBoxs, prevDates, nextDates);
  dateBoxhoverStyle(dateTexts, prevDates, nextDates);
  todaySelecter(thisYearValue, thisMonthValue, dateTexts);

  pickDate(thisYearValue, thisMonthValue, dateBoxs);

  // 번외 기능(전달 날짜 클릭시 전달로 이동, 반대로도 )
  prev_nextDateClick(dateBoxs, prevDates, nextDates, date);
};
