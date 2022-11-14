import { calendar } from "../../component/calendar.js";
import { get, getAll, newDate } from "../common/common.js";

const datePickerInput = get(".date-picker");

const monthMoveDirectionSet = (date, direction) => {
  date.setDate(1);
  calendar(direction);
};

// 오늘 날짜 표시
export const todaySelecter = (thisYearValue, thisMonthValue, dateTexts) => {
  const today = new Date();
  const [todayYear, todayMonth, todyDate, notUse] = newDate(today);

  let dateText = [...dateTexts];

  if (todayYear == thisYearValue && todayMonth == thisMonthValue) {
    dateText.forEach((date) => {
      if (date.innerHTML == todyDate) {
        date.classList.add("today");
      }
    });
  }
};

// 월 이동 버튼 이벤트
export const monthHandler = (date) => {
  const prevMonthBtn = getAll(".prev")[0];
  const nextMonthBtn = getAll(".next")[0];

  prevMonthBtn.onclick = () => {
    monthMoveDirectionSet(date, -1);
  };
  nextMonthBtn.onclick = () => {
    monthMoveDirectionSet(date, 1);
  };
};

// 이전달 날짜 or 다음달 날짜 클릭시 월 이동
export const prev_nextDateClick = (dateBoxs, prevDates, nextDates, date) => {
  let dateBox = [...dateBoxs];
  let dateBoxLength = [...dateBoxs].length - 1;
  let prevDatesLength = prevDates.length;
  let nextDatesLength = dateBoxLength - nextDates.length;

  for (let i = 0; i < prevDatesLength; i++) {
    dateBox[i].onclick = () => {
      monthMoveDirectionSet(date, -1);
    };
  }

  for (let i = dateBoxLength; i > nextDatesLength; i--) {
    dateBox[i].onclick = () => {
      monthMoveDirectionSet(date, 1);
    };
  }
};

// input에 선택한 날짜 value로 넣기
export const pickDate = (thisYearValue, thisMonthValue, dateBoxs) => {
  let dateBox = [...dateBoxs];

  dateBox.forEach((date) => {
    date.onclick = (e) => {
      const thisDate = e.target.textContent.fillZero(2);
      const thisMonth = String(thisMonthValue + 1).fillZero(2);

      datePickerInput.value = `${thisYearValue}-${thisMonth}-${thisDate}`;
    };
  });
};
