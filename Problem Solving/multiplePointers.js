/**
 * Multiple Pointers:
 *
 * How it works: create pointers that correspond to an index or position and move towards the beginning, end or middle based on certain condition.
 *
 * Big-O: Time complexity O(n), Space complexity O(1)
 */

/**
 * Write a function returns the first pair having the sum equals 0. The original array is sorted
 */

module.exports.sumZero = function(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    // console.log(arr[left], arr[right]);
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
    return "There is no solution conforms";
  }
};

console.log(this.sumZero([1, 2, 3, 4, 5]));
