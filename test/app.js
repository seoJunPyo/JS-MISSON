const callback = new IntersectionObserver((e, observer) => {
  e.forEach((e) => {
    if (e.intersectionRatio > 0) {
      console.log("a");
      observer.unobserve(e.target);
    }
  });
});

const observer = document.querySelectorAll(".observer");
observer.forEach((e) => {
  callback.observe(e);
});
