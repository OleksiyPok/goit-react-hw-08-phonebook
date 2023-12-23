export const nameRegex =
  "^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

export const phoneRegex =
  '+?d{1,4}?[.-s]?(?d{1,3}?)?[.-s]?d{1,4}[.-s]?d{1,4}[.-s]?d{1,9}';

export const constants = () => {
  nameRegex, phoneRegex;
};
