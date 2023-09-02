export const checkValue = (value: number) => {
  if (value && value > 0 && value <= 100000) {
    return true;
  } else {
    return false;
  }
};
