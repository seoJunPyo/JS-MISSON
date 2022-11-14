import { calendar } from "./component/calendar.js";
import { get } from "./module/common/common.js";
// import { datePickerEvents } from "./module/datepicker.js";

calendar();

const datePickerInput = get(".date-picker");
const calenderCon = get(".calendar-container");
const layer = get(".layer");

// calendar 열었다 닫기
datePickerInput.onclick = () => {
  calenderCon.classList.add("show");
};

layer.onclick = () => {
  calenderCon.classList.remove("show");
};
