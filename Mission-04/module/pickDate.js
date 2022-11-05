const datePickerInput = document.querySelector(".date-picker");

export const pickDate = (thisYearValue, thisMonthValue, dateBoxs) => {
  [...dateBoxs].forEach((date) => {
    date.onclick = (e) => {
      const thisDate = e.target.textContent.fillZero(2);
      const thisMonth = String(thisMonthValue + 1).fillZero(2);

      datePickerInput.value = `${thisYearValue}-${thisMonth}-${thisDate}`;
    };
  });
};
