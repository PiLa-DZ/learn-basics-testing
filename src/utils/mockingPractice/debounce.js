/**
 * Debounce utility
 * Delays the execution of a function until after 'delay' milliseconds
 * have elapsed since the last time it was invoked.
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
