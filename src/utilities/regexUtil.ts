export const validateIdType = (value: string) => {
  return !/[^A-Za-z0-9]+/.test(value);
};

export const validatePwType = (value: string) => {
  return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value);
};
