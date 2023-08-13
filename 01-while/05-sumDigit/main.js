let num = +prompt("Enter any number : ");
let sum = 0;
let count = 0;
while (num) {
  let remainder = num % 10;
  num = (num - remainder) / 10;
  sum = sum + remainder;
  count++;
}
console.log(`count : ${count} , sum : ${sum}`);

//let say 1150 = 1+1+5+0 = 7
