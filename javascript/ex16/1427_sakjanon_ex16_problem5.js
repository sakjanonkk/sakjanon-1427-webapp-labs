// filterShortStrings = (...strings) => {
//   return strings.filter((string) => string.length >= 4);
// };
// console.log(filterShortStrings(["Hi", "Hello", "Hey", "World"]));
// console.log(filterShortStrings(["a", "ab", "abc", "abcd"]));

// function filterShortStrings(strings) {
//   return strings.filter((string) => string.length >= 4);
//   //   return strings.filter((string) => string.length <= 3);
// }

const filterShortStrings = (arr) => arr.filter((str) => str.length > 3);

console.log(filterShortStrings(["hi", "hello", "hey", "world"])); // Output: ['hello', 'world']
console.log(filterShortStrings(["a", "ab", "abc", "abcd"])); // Output: ['abcd']
