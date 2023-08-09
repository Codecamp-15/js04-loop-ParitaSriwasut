let balance = 100000;
let interest = 2.5;
//  balance + balance * (interest / 100);
for (let i = 0; i < 10; i++) {
  balance = balance + balance * (interest / 100);
}
console.log(balance);
