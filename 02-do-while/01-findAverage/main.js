let input;
let count = 0;
let sum = 0;
let average;

do {
  input = +prompt("Please enter any number , enter cancel to exit");
  if (input === null || isNaN(Number) || input <= 0) {
    count - 1;
  }
  count++;
  sum += input;
  average = sum / count;
} while (!input === null || !isNaN(Number) || !input <= 0);
console.log(`Count : ${count} `);
console.log(`Sum : ${sum} `);
console.log(`Avg : ${average} `);
