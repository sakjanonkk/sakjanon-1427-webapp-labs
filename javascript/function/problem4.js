const celsiusToFahrenheit = (celsius) => {
  return ((celsius * 9) / 5 + 32).toFixed(2);
};

const fahrenheitToCelsius = (fahrenheit) => {
  return (((fahrenheit - 32) * 5) / 9).toFixed(2);
};

const formatConversion = (temp, convert, unit) => {
  let convertedTemp = convert(temp);
  let newUnit = unit === "°C" ? "°F" : "°C";
  return temp.toFixed(2) + " " + unit + " is " + convertedTemp + " " + newUnit;
};

console.log(formatConversion(20, celsiusToFahrenheit, "°C"));
console.log(formatConversion(98.6, fahrenheitToCelsius, "°F"));
console.log(formatConversion(0, celsiusToFahrenheit, "°C"));
console.log(formatConversion(32, fahrenheitToCelsius, "°F"));
