// console.log(uppercaseWords("Hello", "World", "Javascript"));
// console.log(uppercaseWords("A", "B", "C"));

// function uppercaseWords(...words) {
//   return words.map((word) => word.toUpperCase());
// }

const uppercaseWords = (words) => {
  return words.map((word) => word.toUpperCase());
};

console.log(uppercaseWords(["hello", "world", "javascript"])); // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']
console.log(uppercaseWords(["a", "b", "c"])); // Output: ['A', 'B', 'C']
