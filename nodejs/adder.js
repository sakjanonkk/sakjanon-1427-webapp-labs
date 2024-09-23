const inquirer = require("inquirer");

function add(n1, n2) {
  let result = parseFloat(n1) + parseFloat(n2);
  return result;
}

var questions = [
  {
    type: "input",
    name: "operands",
    message: "Operands:",
  },
];

inquirer.prompt(questions).then((answers) => {
  const sum = answers["operands"]
    .split(" ")
    .map((num) => parseFloat(num))
    .reduce((total, x) => total + x, 0);

  console.log(`Operands are ${answers["operands"]}`);
  console.log(
    `${answers["operands"].split(" ").join(" ")} = ${sum.toFixed(2)}`
  );
});
