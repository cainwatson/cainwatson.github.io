
const throttle = (func, wait) => {
  let callable = true;
  
  return (...args) => {
    if (callable) {
      callable = false;
      setTimeout(() => { callable = true; }, wait);
      return func(...args);
    }
    return null;
  };
};
