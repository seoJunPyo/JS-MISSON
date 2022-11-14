import { getAll, removeChildAll } from "../module/common/common.js";
import {
  dateColor,
  dateBoxhoverStyle,
} from "../module/dateBox/dateBoxStyle.js";
import {
  prev_nextDateClick,
  todaySelecter,
  monthHandler,
  pickDate,
} from "../module/dateBox/dateBoxFuntion.js";
import { dateBoxDOM } from "../module/dateBox/dateBoxDOM.js";

export let date = new Date();
export const MonthDOM = getAll(".month");
export const YearDOM = getAll(".year");
export const calendarGrid = getAll(".calendar-grid");

export const calendar = (i = 0) => {
  // 자식요소 삭제먼저하기
  removeChildAll(calendarGrid[0]);

  // month 핸들
  date.setMonth(date.getMonth() + i);
  monthHandler(date);

  const [
    dateBoxs,
    prevDates,
    nextDates,
    dateTexts,
    thisYearValue,
    thisMonthValue,
  ] = dateBoxDOM();

  // date박스 스타일링
  dateColor(dateBoxs, prevDates, nextDates);
  dateBoxhoverStyle(dateBoxs, prevDates, nextDates);
  todaySelecter(thisYearValue, thisMonthValue, dateTexts);

  // 선택한 날짜 input value로 넣기
  pickDate(thisYearValue, thisMonthValue, dateBoxs);

  // 번외 기능(전달 날짜 클릭시 전달로 이동, 반대로도 )
  prev_nextDateClick(dateBoxs, prevDates, nextDates, date);
};
