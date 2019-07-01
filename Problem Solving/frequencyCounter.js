// Write a function receive two arrays as arguments and return whether one is square root of the other

// example: [1, 2, 3] <-> [1, 4, 9]

const arr1 = [1, 2, 3];
const arr2 = [1, 4, 9];

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(Math.pow(arr1[i], 2)); // this can be treated as another loop
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};

// const arr3 = [1, 2, 9, 10];
// const arr4 = [1, 4, 81, 10];
// console.log(same(arr3, arr4));

// Solution 2

const frequencyCounter = iterable => {
  let fc = {};
  for (let item of iterable) {
    fc[item] = fc[item] + 1 || 1;
  }

  return fc;
};

const checkSquare = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const freqArr1 = frequencyCounter(arr1);
  const freqArr2 = frequencyCounter(arr2);

  console.log(freqArr1);
  console.log(freqArr2);

  for (key in freqArr1) {
    if (!(Math.pow(key, 2) in freqArr2)) {
      return false;
    }
    if (freqArr2[Math.pow(key, 2)] !== freqArr1[key]) {
      return false;
    }
  }
  return true;
};

console.log(checkSquare([1, 2, 3, 4, 5], [1, 20, 16, 9, 4]));
