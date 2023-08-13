// let ansNum = prompt("Guess a number!");
// // let isNull = ansNum === null;
// // let isEmpty = ansNum.trim() === "";
// // let isNan = isNaN(ansNum);
// let isValid = ansNum === null || ansNum.trim() === "" || isNaN(ansNum);
// let outOfRange = Number(ansNum) < 1 || Number(ansNum) > 99;
// let isInRange = Number(ansNum) >= 1 || Number(ansNum) <= 99;
// if (isValid)
// {
//   alert("Invalid Input");
// } else if (outOfRange)
// {
//   alert('Invalid Range!');
// } else if (isInRange)
// {
//   alert("Try one more time!")
// }

//Program-1
let ansNum = "";
let isEmpty;
let isNan;
let isOutOfRange;
do {
  ansNum = prompt("Enter any number!");
  isEmpty = ansNum.trim() === "";
  isNan = isNaN(ansNum);
  isOutOfRange = Number(ansNum) < 1 || Number(ansNum) > 99;
  if (isEmpty || isNan) {
    alert("Invalid Input, Try 1-99");
  } else if (isOutOfRange) {
    alert("Invalid Range, Try 1-99");
  }
} while (isEmpty || isNan);

let guessNumber;
do {
  guessNumber = prompt("Enter your guessing number!") || "";

  if (isEmpty || isNan) {
    alert("Invalid Input, Try 1-99");
  } else if (isOutOfRange) {
    alert("Invalid Range, Try 1-99");
  } else if (+guessNumber > +ansNum) {
    alert("Too high! Little low!");
  } else if (+guessNumber < +ansNum) {
    alert("Too low! Little more!!");
  } else if (+guessNumber === +ansNum) {
    alert("Yes! Correct...");
  }
} while (+guessNumber != +ansNum);
