const dateTextStyle = (dateBoxs, i, color, fontWeigth = "600") => {
  [...dateBoxs][i].style.color = color;
  [...dateBoxs][i].style.fontWeight = fontWeigth;
};

export const dateColor = (dateBoxs, prevDates, nextDates) => {
  let dateBoxLength = [...dateBoxs].length;

  // 일요일 빨간색 표시
  for (let i = 0; i < dateBoxLength; i += 7) {
    dateTextStyle(dateBoxs, i, "#FF4433");
  }

  // 전달 다음 달 날짜 흐리게
  for (let i = 0; i < prevDates.length; i++) {
    dateTextStyle(dateBoxs, i, "#c9c9c9", "500");
  }

  for (
    let i = dateBoxLength - 1;
    i > dateBoxLength - 1 - nextDates.length;
    i--
  ) {
    dateTextStyle(dateBoxs, i, "#c9c9c9", "500");
  }
  //
};

//날짜 호버 스타일
export const dateBoxhoverStyle = (dateTexts, prevDates, nextDates) => {
  let dateText = [...dateTexts];
  let dateTextLength = [...dateTexts].length;

  for (let i = prevDates.length; i < dateTextLength - nextDates.length; i++) {
    dateText[i].onmouseover = (e) => {
      e.target.classList.add("hover");
    };
    dateText[i].onmouseout = (e) => {
      e.target.classList.remove("hover");
    };
  }
};
