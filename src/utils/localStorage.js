export const getItemFromLocalStorage = itemKey => {
  // return null is local storage isn't supported
  if (window && !window.localStorage) {
    return null;
  }

  try {
    return localStorage.getItem(itemKey);
  } catch (e) {
    return null;
  }
};
