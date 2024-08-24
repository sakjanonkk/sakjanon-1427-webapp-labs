function readInput() {
  var list = [];
  var number;

  while (true) {
    number = prompt("Enter an integer (a negative integer to stop):");

    if (number === null) continue;

    number = parseInt(number);

    if (isNaN(number)) {
      alert("Please enter a valid number.");
      continue;
    }

    if (number < 0) {
      if (list.length === 0) {
        alert("The list is empty. Average: 0, Minimum: 0, Maximum: 0");
      }
      break;
    }

    if (number > 0) {
      list.push(number);
    }
  }

  return list;
}

function displayStats(list) {
  if (list.length === 0) {
    return;
  }

  var sum = 0;
  var min = list[0];
  var max = list[0];

  for (var i = 0; i < list.length; i++) {
    sum += list[i];
    if (list[i] < min) min = list[i];
    if (list[i] > max) max = list[i];
  }

  var avg = (sum / list.length).toFixed(2);

  alert(
    "For the list " +
      list.join(", ") +
      ", " +
      "the average is " +
      avg +
      ", the minimum is " +
      min +
      ", and the maximum is " +
      max
  );
}

function main() {
  document.body.style.display = "block";
  var list = readInput();
  displayStats(list);
}

window.onload = main;
