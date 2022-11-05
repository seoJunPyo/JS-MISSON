export const changeRatingEvent = (e) => {
  const changeRating = new CustomEvent("rating-change", {
    bubbles: true,
    cancelable: true,
    composed: true,
    detail: e.target.id,
  });

  e.target.dispatchEvent(changeRating);
};
