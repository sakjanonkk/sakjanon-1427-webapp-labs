function calculator(num1, num2, operatorfunction) {
  return operatorfunction(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

console.log(calculator(5, 3, add)); // should return 8
console.log(calculator(5, 3, subtract)); // should return 2
console.log(calculator(5, 3, multiply)); // should return 15
console.log(calculator(6, 3, divide)); // should return 2
