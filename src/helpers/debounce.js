let timer;

const debounceQuery = (callback, delay) => {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    callback();
  }, delay);
};

export default debounceQuery;
