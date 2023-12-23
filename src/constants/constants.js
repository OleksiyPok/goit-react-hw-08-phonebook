export const REGEX = Object.freeze({
  nameRegex: /^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$/,

  phoneRegex:
    /^[+]?[(]?[0-9]{0,2}[)]?[-\s]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3,4}[-\s]?[0-9]{3,4}$/,
});
