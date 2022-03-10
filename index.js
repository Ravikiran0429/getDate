const addDays = require("date-fns/addDays");

function getDateAfterXDays(days) {
  let date = new Date(2020, 07, 22);
  let result = addDays(date, days);
  let result1 = `${result.getDate()}-${
    result.getMonth() + 1
  }-${result.getFullYear()}`;
  return result1;
}
console.log(getDateAfterXDays(6));

module.exports = getDateAfterXDays;
