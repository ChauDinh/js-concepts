/**
 * 
 */

function getValue() {
  var a = 1;
  var b = 2;
  return a + b;
}

var v1 = getValue();
console.log(v1);

function f1() {
  var N = 0;
  console.log(N);
  function f2() {
    N += 1;
    console.log('-->', N);
  }

  return f2;
}

var result = f1();
result();
result();
result();

function speak() {
  return function logIt() {
    var words = "Hello, world!";
    console.log(words);
  }
}
var sayHello = speak();
sayHello();