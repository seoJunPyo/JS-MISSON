export const makeDOMwithProperties = (domType, propertyMap) => {
  const dom = document.createElement(domType);
  Object.keys(propertyMap).map((key) => {
    dom[key] = propertyMap[key];
  });
  return dom;
};

export const appendChildList = (target, childList) => {
  if (!Array.isArray(childList)) return;

  childList.forEach((children) => {
    target.append(children);
  });
};

export const removeChildAll = (target) => {
  while (target.hasChildNodes()) {
    target.removeChild(target.firstChild);
  }
};

String.prototype.fillZero = function (width) {
  return this.length >= width
    ? this
    : new Array(width - this.length + 1).join("0") + this;
};

export const get = (target) => {
  return document.querySelector(target);
};

export const getAll = (target) => {
  return document.querySelectorAll(target);
};

export const newDate = (date) => {
  return [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.toLocaleString("en-US", { month: "long" }),
  ];
};
