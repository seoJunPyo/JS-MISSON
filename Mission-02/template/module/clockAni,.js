export const clockAni = (clockCopy) => {
  let deg = {
    second: 0,
    minute: 0,
    hour: 0,
  };

  setInterval(() => {
    if (deg.second === 360) {
      deg.second = 0;
      deg.minute += 6;
    }
    if (deg.minute === 360) {
      deg.minute = 0;
      deg.hour += 30;
    }
    deg.second += 6;

    document.documentElement
      .querySelectorAll(".hand.second")
      [clockCopy].style.setProperty("--deg", deg.second);
    document.documentElement
      .querySelectorAll(".hand.minute")
      [clockCopy].style.setProperty("--deg", deg.minute);
    document.documentElement
      .querySelectorAll(".hand.hour")
      [clockCopy].style.setProperty("--deg", deg.hour);
  }, 1000);
};
