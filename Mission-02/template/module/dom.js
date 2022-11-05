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
