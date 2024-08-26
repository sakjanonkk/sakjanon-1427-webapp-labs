document.write("<h1>Find the larger number</h1>");

var findLarger = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Please enter valid numbers";
  }

  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

var number1 = prompt("Enter the first number:");
var number2 = prompt("Enter the second number:");

var largerNumber = findLarger(parseFloat(number1), parseFloat(number2));
document.write("<p>Enter two numbers to see which is larger</p>");
if (isNaN(largerNumber)) {
  document.write("<p>Please enter valid numbers</p>");
} else {
  document.write(
    "<p>The larger number between " +
      number1 +
      " and " +
      number2 +
      " is: " +
      largerNumber +
      "</p>"
  );
}
