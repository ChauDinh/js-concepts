/**
 * Sliding Window Pattern:
 *
 * How it works: Create a window, which can either be an array or number of single variable from one position to another. Depending on a certain condition, the window either increases or closes, if it closes a new window is created (opened).
 *
 * Big-O: Time complexity O(n) where n is the length of an array
 *
 * Notes: This technique shows how a nested loop in few problems can be converted to single loop and hence reducing time complexity
 * Let's start with a problem for illustration where we can apply this technique
 */

// Write a function accepts an array of integers and a number. The function should calculate the maximum sum of n consecutive elements in the array.

module.exports.maxSubarraySum = function(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    // each new tempSum is the previous n numbers, minus the first element of n numbers, plus the next element in the array
    // this way we only loop through the array once, resetting tempNum to be new window of n numbers.
    tempSum = tempSum - arr[i - num] + arr[i];
    // if tempSum is greater than tempSum becomes maxSum
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

console.log(this.maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 8], 2));
