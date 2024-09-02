const students = [
  { name: "Alice", age: 20, scores: [85, 90, 78] },
  { name: "Bob", age: 22, scores: [60, 65, 70] },
  { name: "Charlie", age: 23, scores: [95, 100, 92] },
  { name: "David", age: 21, scores: [50, 55, 60] },
  { name: "Eve", age: 19, scores: [88, 79, 84] },
];

// Step 1: Calculate average scores
const studentAverages = students.map((student) => {
  const avgScore = (
    student.scores.reduce((acc, score) => acc + score, 0) /
    student.scores.length
  ).toFixed(2);
  return { name: student.name, age: student.age, avgScore };
});

// Step 2: Filter students with average score >= 70
const passingStudents = studentAverages.filter(
  (student) => student.avgScore >= 70
);

// Step 3: Calculate average age of passing students
const averageAge = (
  passingStudents.reduce((acc, student) => acc + student.age, 0) /
  passingStudents.length
).toFixed(2);

console.log("Passing Students:", passingStudents);
console.log("Average Age of Passing Students:", averageAge);
