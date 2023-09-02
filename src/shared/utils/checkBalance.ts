export const checkBalance = (balance: number, value: number) => {
  if (balance >= Math.abs(value)) {
    return true;
  } else {
    return false;
  }
};
