const celsiusToFahrenheit = (celsius) => ((celsius * 9) / 5 + 32).toFixed(2);

const fahrenheitToCelsius = (fahrenheit) =>
  (((fahrenheit - 32) * 5) / 9).toFixed(2);

const formatConversion = (temp, convert, unit) =>
  `${temp.toFixed(2)} ${unit} is ${convert(temp)} ${
    unit === "°C" ? "°F" : "°C"
  }`;

console.log(formatConversion(20, celsiusToFahrenheit, "°C"));
console.log(formatConversion(98.6, fahrenheitToCelsius, "°F"));
console.log(formatConversion(0, celsiusToFahrenheit, "°C"));
console.log(formatConversion(32, fahrenheitToCelsius, "°F"));
