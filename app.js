// 1)

// let a = 371;

// let son1 = a % 10;
// let son2 = Math.floor(a / 10) % 10;
// let son3 = Math.floor(a / 100);
// if (son1 !== son2 || son1 !== son3 || son2 !== son3) {
//   console.log("raqmlar bir birga tenh");
// } else {
//   console.log("raqamlar bir biriga teng emas");
// }

// 2)
// let a = 1;
// let b = 10;
// let sum = 0;

// for (let i = a; i <= b; i++) {
//   sum += i;
// }
// console.log(sum);

// 3)
// function strABC(a, b, c) {
//   let arr = [a, b, c];
//   arr.sort((a, b) => a - b);
//   return arr.join("");
// }
// console.log(strABC(10, 5, 8));
// 4)
// function strABC(a, b, c) {
//   let arr = [a, b, c];
//   arr.sort((a, b) => a - b);
//   return arr.join("");
// }
// console.log(strABC(10, 5, 8));

// 5)
// function ispalindrom(n) {
//   let son = n.tostring("");
//   let son2 = son.split("").reverse().join("");
//   if (son === son2) {
//     return true;
//   }
// }
// console.log(ispalindrom(1678761));

// 6)
let son = 0;
let yegndisi = 0;
function getDividersNumbeAndSum(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      son++;
      yegndisi += i;
    }
  }
  console.log(son, yegndisi);
}
getDividersNumbeAndSum(12);
