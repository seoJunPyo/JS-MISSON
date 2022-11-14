import {
  date,
  MonthDOM,
  YearDOM,
  calendarGrid,
} from "../../component/calendar.js";
import { getAll, makeDOMwithProperties, newDate } from "../common/common.js";

export const dateBoxDOM = () => {
  const [thisYearValue, thisMonthValue, notUse, thisMonthText] = newDate(date);

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

  const dateBoxs = [...getAll(".date-box")];
  const dateTexts = [...getAll(".date-text")];

  return [
    dateBoxs,
    prevDates,
    nextDates,
    dateTexts,
    thisYearValue,
    thisMonthValue,
  ];
};
