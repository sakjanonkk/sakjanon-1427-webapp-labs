const student1Scores = [85, 90, 80, 95, 75];
const student2Scores = [70, 65, 80, 75, 70];

const calculateAverage = (scores) => {
  const total = scores.reduce((acc, score) => acc + score, 0);
  return total / scores.length;
};

const getLetterGrade = (average) => {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
};

const calculateFinalGrade = (scores, calculateAverage, getLetterGrade) => {
  const average = calculateAverage(scores);
  return getLetterGrade(average);
};

console.log(
  "Student 1 " +
    "Final Grade: " +
    calculateAverage(student1Scores) +
    " " +
    " (" +
    calculateFinalGrade(student1Scores, calculateAverage, getLetterGrade) +
    ")"
);
console.log(
  "Student 2 " +
    "Final Grade: " +
    calculateAverage(student2Scores) +
    " " +
    " (" +
    calculateFinalGrade(student2Scores, calculateAverage, getLetterGrade) +
    ")"
);
