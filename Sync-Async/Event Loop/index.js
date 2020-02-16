// Example 1

// function one(x) {
//   x++;
//   setTimeout(() => {
//     console.log(`setTimeout ${x}`);
//   });
//   two(x);
// }

// function two(y) {
//   y++;
//   three(y);
// }

// function three(z) {
//   z++;
//   console.log(`This is the third func: ${z}`);
// }

// one(1);

// Example 2
const s = Date.now();

// C: a asynchronous code
setTimeout(() => {
  console.log(`setTimeout 1st: ${Date.now() - s}`);
}, 1000);

// D: another asynchronous code
setTimeout(() => {
  console.log(`setTimeout 2nd: ${Date.now() - s}`);
}, 3000);

// A: a synchronous code takes 3.5s
let result = 0;
for (let i = 0; i < 3000000000; i++) {
  result = result + i;
}

// B: another synchronous code, will be blocked, and run after A
console.log(`Sync: ${result} - ${Date.now() - s}`);
