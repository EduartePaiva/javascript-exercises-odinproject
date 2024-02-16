const convertToCelsius = function (fahrenheit) {
  const total = ((fahrenheit - 32) * 5) / 9
  return Math.round(total * 10) / 10
};

const convertToFahrenheit = function (celsius) {
  const total = (celsius * 9) / 5 + 32
  return Math.round(total * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
