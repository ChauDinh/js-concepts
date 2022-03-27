// Version 1
// function identify() {
//   return this.name.toUpperCase();
// }

// function speak() {
//   const greeting = `Hello, I'm ${identify.call(this)}`;
//   console.log('greeting: ', greeting);
// }

// const me = {
//   name: "Chris"
// };

// const you = {
//   name: "Reader"
// };

// speak.call(me);
// speak.call(you);

// Version 2
// function identify(context) {
//   return context.name.toUpperCase();
// }

// function speak(context) {
//   const greeting = `Hello, I'm ${identify(context)}`;
//   console.log('greeting: ', greeting);

//   return;
// }

// const me = {
//   name: "Chris"
// };

// const you = {
//   name: "Reader"
// };

// speak(me);
// speak(you);

// function foo(number) {
//   console.log('foo: ', number);

//   // keep track of how many times foo called
//   this.count++;
// }

// foo.count = 0;

// for (let i = 0; i < 10; i++) {
//   if (i > 5) {
//     foo(i);
//   }
// }

// console.log('count: ', foo.count);

// To avoid this, create an object to hold the count property and modify it in foo function
function foo(num) {
  console.log('foo: ' + num);

  data.count++;
} 

const data = {
  count: 0
};

for (let i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}

console.log(data.count);

// Lexical scope is perfectly fine and useful mechanism

const a = {
  valueOf: 5
}

console.log(a.valueOf == 5);