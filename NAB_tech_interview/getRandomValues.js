const getRandomValues = require("get-random-values");
const webCrypto = require("crypto").webcrypto;

const array = new Uint32Array(6);
console.log('self: ', webCrypto);

console.log("Your lucky numbers: ");

for (let num of array) {
  console.log(num);
}