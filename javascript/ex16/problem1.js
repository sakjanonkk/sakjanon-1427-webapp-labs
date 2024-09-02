function multiply(a, b) {
  return a * b;
}

let total = 0;
function addToTotal(num) {
  total += num;
  return total;
}

function getUserName(userId) {
  return database.getUserById(userId).name;
}
