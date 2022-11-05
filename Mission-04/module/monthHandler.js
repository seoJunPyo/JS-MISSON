import { calendar } from "../component/calendar.js";

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
