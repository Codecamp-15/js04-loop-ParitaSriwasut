let input;
let count = 0;
let avg = 0;
let sum = 0;

do {
  input = prompt("Please enter any number...");
  input = parseInt(input);
  if (input === null || input === 0 || input === -1) {
    break;
  }
  sum = sum + input;
  count++;
  avg = sum / count;
} while (!input === null || !input === 0 || !input === -1);
console.log(`count : ${count} `);
console.log(`sum : ${sum} `);
console.log(`avg : ${avg} `);
