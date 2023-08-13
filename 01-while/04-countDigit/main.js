let num = +prompt("Enter any number : ");
let count = 0;
if (num < 0) {
  num = -num;
}
// while (num >= 0 && num >= 1) {
//   console.log(num);
//   num = num / 10;
//   count++;
// }
// console.log(count);
let sum = 0;
while (num) {
  let remainder = n % 10;
  num = (num - remainder) / 10;
  sum += remainder;
  count++;
}
