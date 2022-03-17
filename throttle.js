module.exports = function throttle(fn, delay) {
  let last = 0; // 上次触发时间
  return (...args) => {
    const now = Date.now();
    if (now - last > delay) {
      last = now;
      fn.apply(this, args);
    }
  };
};
