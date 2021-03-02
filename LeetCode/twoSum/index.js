/**
 * First solution: Brute fore
 */
const twoSumI = function (nums, target) {
  if (nums.length <= 1) {
    return [];
  }
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

/**
 * Second solution: Using with binary search
 */
const binarySearch = function (arr, value, start, end) {
  if (start > end) {
    return null;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid].value === value) return arr[mid].index;
  if (arr[mid].value > value) {
    return binarySearch(arr, value, start, mid - 1);
  }
  if (arr[mid].value < value) {
    return binarySearch(arr, value, mid + 1, end);
  }
};
const twoSumII = function (nums, target) {
  // create object contains elements in nums array and its indexes
  // exp: [{index: 0, value: 1}, {index: 1, value: 2}, ...]
  let objNums = [];
  for (let i = 0; i < nums.length; i++) {
    objNums.push({
      index: i,
      value: nums[i],
    });
  }
  // sort the objNums based e.value
  objNums.sort((a, b) => a.value - b.value > 0);
  // binary search the complement in objNums
  for (let i = 0; i < objNums.length; i++) {
    let complement = target - objNums[i].value;
    let complementIdx = binarySearch(objNums, complement, 0, objNums.length);
    if (complementIdx) {
      return [i, complementIdx];
    }
  }
};

const twoSumIII = (arr, target) => {};

console.log(twoSumIII([1, 5, 2, 4, 3], 6));
console.log(twoSumII([1, 5, 2, 4, 3], 6));
