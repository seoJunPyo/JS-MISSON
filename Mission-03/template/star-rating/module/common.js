export const prevSelectedAll = (element) => {
  let result = [];

  while ((element = element.previousSibling)) {
    result.push(element);
  }

  return result;
};
