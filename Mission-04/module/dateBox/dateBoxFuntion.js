import { calendar } from "../../component/calendar.js";

const datePickerInput = document.querySelector(".date-picker");

export const prev_nextDateClick = (dateBoxs, prevDates, nextDates, date) => {
  let dateBoxlength = [...dateBoxs].length - 1;

  for (let i = 0; i < prevDates.length; i++) {
    [...dateBoxs][i].onclick = () => {
      date.setDate(1);
      calendar(-1);
    };
  }

  for (let i = dateBoxlength; i > dateBoxlength - nextDates.length; i--) {
    [...dateBoxs][i].onclick = () => {
      date.setDate(1);
      calendar(1);
    };
  }
};

export const todaySelecter = (thisYearValue, thisMonthValue, dateTexts) => {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todyDate = today.getDate();

  if (todayYear == thisYearValue && todayMonth == thisMonthValue) {
    [...dateTexts].forEach((date) => {
      if (date.innerHTML == todyDate) {
        date.classList.add("today");
      }
    });
  }
};

export const monthHandler = (date) => {
  const prevMonthBtn = document.getElementsByClassName("prev")[0];
  const nextMonthBtn = document.getElementsByClassName("next")[0];

  prevMonthBtn.onclick = () => {
    date.setDate(1);
    calendar(-1);
  };
  nextMonthBtn.onclick = () => {
    date.setDate(1);
    calendar(1);
  };
};

export const pickDate = (thisYearValue, thisMonthValue, dateBoxs) => {
  [...dateBoxs].forEach((date) => {
    date.onclick = (e) => {
      const thisDate = e.target.textContent.fillZero(2);
      const thisMonth = String(thisMonthValue + 1).fillZero(2);

      datePickerInput.value = `${thisYearValue}-${thisMonth}-${thisDate}`;
    };
  });
};
