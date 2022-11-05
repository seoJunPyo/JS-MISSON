import { calendar } from "./component/calendar.js";
// import { datePickerEvents } from "./module/datepicker.js";

calendar();
// datePickerEvents();

const datePickerInput = document.querySelector(".date-picker");
const calenderCon = document.querySelector(".calendar-container");
const layer = document.querySelector(".layer");

datePickerInput.onclick = () => {
  calenderCon.classList.add("show");
};

layer.onclick = () => {
  calenderCon.classList.remove("show");
};
