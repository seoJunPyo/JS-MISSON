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

export const removeChildAllwithoutNav = (target) => {
  while (target.hasChildNodes()) {
    if (target.lastChild?.className === "category-list") {
      break;
    }
    target.removeChild(target.lastChild);
  }
};

export const removerClassAll = (target, className) => {
  target.forEach((target) => {
    target.classList.remove(className);
  });
};

export const get = (target) => {
  return document.querySelector(target);
};

export const getAll = (target) => {
  return document.querySelectorAll(target);
};
