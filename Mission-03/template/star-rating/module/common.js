export const prevAll = (element) => {
  let result = [];

  while ((element = element.previousSibling)) {
    result.push(element);
  }

  return result;
};
