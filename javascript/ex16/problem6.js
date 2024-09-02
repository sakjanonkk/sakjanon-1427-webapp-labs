const product = (numbers) =>
  numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(product([2, 3, 4, 5])); // Output: 120
console.log(product([4, 5, 6, 7])); // Output: 840
