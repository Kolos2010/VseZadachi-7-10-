// Задача 1
// const addZero = (numberStr) =>
//   String(numberStr).length === 1 ? `0${numberStr}` : String(numberStr);

// const getDateFormat = (date, separator = ".") => {
//   const dateItem = date.getDate();
//   const month = date.getMonth();
//   const year = date.getFullYear();
//   const dateArray = [dateItem, month + 1, year].map((item) => addZero(item));
//   console.log("dateArray", dateArray);

//   return dateArray.join(separator);
// };

// console.log(getDateFormat(new Date()));

// Задача 2

// const convertMsToDayss = (date1, date2) => {
//   const differenceInMilliseconds = date2 - date1;
//   const differenceInDays = differenceInMilliseconds / (1000 * 3600 * 24);
//   return Math.round(differenceInDays);
// };

// console.log(convertMsToDayss(new Date(), new Date("2024-11-26")));

// //Задание 3
function addDays(date, days = 1) {
  const milliSeconds = 24 * 60 * 60 * 1000;
  const timeStamp = date.getTime();
  const newTimestamp = timeStamp + days * milliSeconds;
  const newDate = new Date(newTimestamp);
  return newDate;
}

const currentDate = new Date();
const newDate = addDays(currentDate, 500);
console.log(newDate);
