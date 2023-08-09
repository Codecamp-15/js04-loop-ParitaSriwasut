// another way

// for (let i = 1; i <= 5; i++) {
//     let star = "";
//     for (let j = 1; j <= i; j++) {
//         star = star + "*";
//       }
//       console.log(star);
//   }

//My code version
let star = "";
let n = 5;
for (let i = 1; i <= n; i++) {
  star = star + "*";
  for (let j = 1; j <= n; j++) {
    ("\n");
  }
  console.log(star);
}

//Instructor's version
let str = "";
for (let i = 1; i <= 4; i++) {
  if (j <= i) {
    str += "*";
  }
  for (let j = 0; j <= 4; j++) {
    str += "\n";
  }
}
