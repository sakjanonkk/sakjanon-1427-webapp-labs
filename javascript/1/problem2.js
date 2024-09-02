// function getMiddleElements(arr) {
//   let result = [];
//   let n = arr.length;

//   // Check if the size of the array is even or odd
//   if (n % 2 === 0) {
//     // If even, append two middle elements to the result array
//     result.push(arr[n / 2 - 1]);
//     result.push(arr[n / 2]);
//   } else {
//     // If odd, append the single middle element to the result array
//     result.push(arr[Math.floor(n / 2)]);
//   }

//   return result;
// }

// const getMiddleElements = (arr)==> {
//   const len = arr.length;

//   if (len % 2 === 0) {
//     return arr.slice(len / 2 - 1, len / 2 + 1);
//   } else {
//     return arr.slice(Math.floor(len / 2), Math.floor(len / 2) + 1);
//   }
// };

console.log("Problem2");
console.log(getMiddleElements([1, 2, 3, 4, 5]));
console.log(getMiddleElements([1, 2, 3, 4]));
