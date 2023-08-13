console.log("counting loop");
console.log("starting...");
// for (let i = 2; i <= 20; i = i + 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// console.log("end..");

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     //skip Fizz
//     //console.log("Fizz");
//     continue;
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// console.log("end..");

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     //skip Fizz
//     //console.log("Fizz");
//     continue;
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//Ex 3

// for (let j = 1; j <= 20; j++) {
//   if (j % 2 == 0) console.log(j);
//   else continue;
//   console.log("even");
// }

// //Ex 4

// let str = "";
// for (let i = 1; i <= 10; i++) {
//   //Guard
//   if (i % 3 == 0) {
//     continue; //skip i % 3 = 0
//   }
//   str = str + i;
// }
// console.log(str); //concat a string 1234567890

//Ex 5

// let src = "codecamp";
// let result = "";
// for (let n = 0; n < src.length; n++) {
//   let c = src[n];
//   let vowel = c == "a" || c == "e" || c == "i" || c == "o" || c == "u";
//   //console.log(n, src[n]);
//   if (vowel) continue;
//   result = result + src[n];
// }
// console.log(result);

//map
// [1, 2, 3, 4].map((x) => x * 10);
// console.log(x);

//Nested loop
//Multiplication Table
for (let i = 2; i <= 12; i++) {
  console.log("Let's get started!");
  for (let j = 1; j <= 12; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("\n");
}

console.log("end..");
