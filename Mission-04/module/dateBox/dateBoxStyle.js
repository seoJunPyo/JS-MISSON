export const dateColor = (dateBoxs, prevDates, nextDates) => {
  let dateBoxlength = [...dateBoxs].length;

  // 일요일 빨간색 표시
  for (let i = 0; i < dateBoxlength; i += 7) {
    [...dateBoxs][i].style.color = "#FF4433";
  }

  // 전달 다음 달 날짜 흐리게
  for (let i = 0; i < prevDates.length; i++) {
    [...dateBoxs][i].style.color = "#c9c9c9";
    [...dateBoxs][i].style.fontWeight = "500";
  }

  for (
    let i = dateBoxlength - 1;
    i > dateBoxlength - 1 - nextDates.length;
    i--
  ) {
    [...dateBoxs][i].style.color = "#c9c9c9";
    [...dateBoxs][i].style.fontWeight = "500";
  }
};

export const dateBoxhoverStyle = (dateTexts, prevDates, nextDates) => {
  let dateBoxlength = [...dateTexts].length;

  for (let i = prevDates.length; i < dateBoxlength - nextDates.length; i++) {
    [...dateTexts][i].onmouseover = (e) => {
      e.target.classList.add("hover");
    };
    [...dateTexts][i].onmouseout = (e) => {
      e.target.classList.remove("hover");
    };
  }
};

/**
 width 지정 필요한 곳
 1. 달력 전체 width 설정
 2. 달력 전체 width : .calendar-grid height = 4 : 3
 3. dateBox width, heigth는 달력 전체 width / 10
 4. dateBox fontsize는 달력 전체 width / 10
 5. month fontsize는 달력 전체 width / 16
 6. year fontsize는 month fontsize / 2
 */
