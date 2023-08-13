console.log("while loop");
//loop type
//Condition loop : will run the codebased on boolean.
//Counting loop : will run the code based on number.
//List loop: will run the code based on list.

// let i = 1;
// while (i <= 20) {
//   // if (i % 3 === 0) {
//   //   console.log(i);
//   // } else if (i % 5 === 0) {
//   //   console.log(`${i} : Yayyy`);
//   // }
//   // if (i % 3 !== 0) {
//   //   console.log(i);
//   // }
//   if (i % 5 === 0) {
//     console.log(`${i} : Yayyyy`);
//   } else if (i % 3 === 0) {
//     console.log(i);
//   }
//   i++;
// }
// console.log("end");

// let i = 1;
// while (i <= 20) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} : FizzBuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} : Fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} : Buzz`);
//   } else {
//     console.log(i);
//   }
//   i++;
// }
// console.log("end...");

//Loop reverse
let groceryList = [
  "Orange Juice",
  "Tomatoes",
  "Milk",
  "Eggs",
  "Pasta",
  "Bananas",
];
for (let i = groceryList.length - 1; i >= 0; i--) {
  console.log(groceryList[i]);
}

//Nested loop
let mikiFriends = ["Yuta", "Noa", "Izumi", "John", "Mike"];
let lilyFriends = ["Darren", "Jess", "Rosie", "Yuta", "Mike"];
let multipleFriends = [];
for (let i = 0; i < mikiFriends.length; i++) {
  for (let j = 0; j < mikiFriends.length; j++) {
    if (mikiFriends[i] === lilyFriends[j]) {
      multipleFriends.push(mikiFriends[i]);
    }
  }
}
console.log(multipleFriends);

//Loop exercise

//Triangle star 1
// let s = "";
// for (let i = 0; i < 5; i++) {
//   s = s + "*";
//   console.log(s);
// }
//Triangle star 2
// let n = 5;
// for (let i = 0; i < n; i++) {
//   let s = "";
//   for (let j = 0; j < i; j++) {
//     s = s + "*";
//   }
//   console.log(s);
// }
//One line star
// let s = "";
// for (let i = 0; i < 2; i++) {
//   s = s + "*";
// }
// console.log(s);

//Multiple line with star
// let n = 5;
// for (let i = 0; i < n; i++) {
//   let s = "";
//   for (let j = 0; j < n; j++) {
//     s = s + "*";
//   }
//   console.log(s);
// }

//sorting number multiple line
// for (let i = 1; i <= 2; i++) { // i is vertical line
//   let s = "";
//   for (let j = 1; j <= 2; j++) {
//     s = s + j; // j is horizontal line and update s + j value.
//   }
//   console.log(s);
// }

//sorting number in multiple line
// let n = 5;
// for (let i = 0; i < n; i++) {
//   let s = "";
//   for (let j = 0; j < n; j++) {
//     s = s + i;
//   }
//   console.log(s);
// }

//sorting number in multiple line by reversing
let n = 5;
for (let i = n; i <= 1; i++) {
  let s = "";
  for (let j = n; j <= 1; j++) {
    s = s + i;
  }
  console.log(s);
}
