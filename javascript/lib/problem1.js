let number;
do {
  number = parseInt(prompt("Enter a positive integer"), 10);
} while (isNaN(number) || number <= 0);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function showPrimes(n) {
  let primeNumbers = "";

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primeNumbers += i + ", ";
    }
  }

  if (primeNumbers) {
    alert(
      "For n = " + n + ", the prime numbers are: " + primeNumbers.slice(0, -2)
    );
  } else {
    alert("For n = " + n + ", there are no prime numbers.");
  }
}

showPrimes(number);
