export const dateFormat = (date) => {
  var Y = date.getFullYear();
  var M = date.getMonth() + 1;
  var D = date.getDate();
  var times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D
  return times
}
