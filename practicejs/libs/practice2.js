let numbers = [1, 2, 3, 4, 7, 3, 5, 6];
function isOddNumber(number) {
  return number % 2;
}

const Odd = numbers.filter(isOddNumber);

console.log(Odd);
