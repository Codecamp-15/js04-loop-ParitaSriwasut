// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// let sumEven = 0;
// let sumOdd = 0;
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) sumEven += i;
//   else sumOdd += i;
// }
// console.log(sumEven, sum - sumEven, sumOdd);

let sumEvenSquare = 0;
let sumThirdSquare = 0;
let sumEvenQ = 0;
for (i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    //console.log(`${i}^2`);
    sumEvenSquare = sumEvenSquare + i ** 2;
  }
  if (i % 3 === 0) {
    sumThirdSquare = sumThirdSquare + i ** 2;
  }
}
console.log(`sumEvenQ : ${sumEvenSquare}`);
console.log(`sumEvenQ : ${sumThirdSquare}`);
console.log(`sumEvenQ : ${sumEvenSquare} - ${sumThirdSquare}`);
