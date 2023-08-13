// for (let i = 2; i <= 100; i++) {
//   let count = 0; //start next count.
//   for (let j = 2; j <= 100; j++) { //for divided a number
//     if (i % j === 0) {
//       // for checking prime number
//       count = count + 1;
//     }
//   }
//   if (count > 1) {
//     continue; //if count > 1 is not prime number
//   } else {
//     console.log(i);
//   }
// }

//Instructor's version
for (let n = 2; n <= 100; n++) {
  let isPrime = true;
  for (let divider = 2; divider < n; divider++) {
    if (n % divider == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`number${n} is prime number!`);
  } else {
    console.log(`number ${n} is not prime number`);
  }
}
