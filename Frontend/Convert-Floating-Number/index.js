const isPowerOfFour = number => {
  let logarithmOfFour = Math.log(number) / Math.log(4);
  return logarithmOfFour === ~~(logarithmOfFour);
}

console.log(isPowerOfFour(6));