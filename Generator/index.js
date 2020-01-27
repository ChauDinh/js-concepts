// function* generator(i) {
//   yield i;
//   yield i + 10;
// }

// const generator2 = function*(i) {
//   yield i;
//   yield i + 10;
// };

// let gen = generator(10);
// console.log(gen);
// console.log(gen.next());
// console.log(gen.next());

// function* foo() {
//   let index = 0;
//   while (true) {
//     yield index++;
//   }
// }

// const bar = foo();
// console.log(bar.next());
// console.log(bar.next());

// const foo = function*() {
//   yield 10;
//   yield 20;
// };

// const bar = foo();
// console.log(bar.next());
// console.log(bar.next());
// console.log(bar.next());

// function* foo(i) {
//   yield i;
//   yield i + 1;
//   yield i + 2;
// }

// const bar = function*(j) {
//   yield j;
//   yield* foo(j);
//   yield j + 10;
// };

// const fooBar = bar(10);

// console.log(fooBar.next());
// console.log(fooBar.next());
// console.log(fooBar.next());
// console.log(fooBar.next());
// console.log(fooBar.next());
// console.log(fooBar.next());

// function* logGenerator() {
//   console.log(0);
//   console.log(1, yield);
//   console.log(2, yield);
//   console.log(3, yield);
// }

// const logger = logGenerator();

// logger.next("peter");
// logger.next("click");

let foo;
function* bar() {
  console.log("before async");
  yield new Promise(resolve =>
    setTimeout(() => resolve("Happy new year!"), 1000)
  ).then(x => {
    console.log(x);
    foo.next();
  });
  console.log("after async");
}

foo = bar();
foo.next();

console.log("Happy new year!");
