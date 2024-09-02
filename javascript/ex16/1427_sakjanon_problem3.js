let userCount = 0;
function incrementUserCount() {
  userCount++;
  return userCount;
}
function incrementUserCount2(userCount) {
  userCount++;
  return userCount;
}

console.log(incrementUserCount()); //output 1
console.log(incrementUserCount()); //output 2
userCount = 0;
userCount = incrementUserCount2(userCount); //output 1
console.log(userCount);
userCount = incrementUserCount2(userCount); //output 2
console.log(userCount);

// let userCount = 0;
// userCount = pureIncrementUserCount(userCount); //output 1
// console.log(userCount);
// userCount = pureIncrementUserCount(userCount); //output 2
// console.log(userCount);
