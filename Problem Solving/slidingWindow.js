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

module.exports.maxSubarraySum = function(arr, k) {
  if (arr.length < k) return null;
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    // Compute the sum of first window of size k
    maxSum += arr[i];
  }
  let windowSum = maxSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
};

console.log(this.maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 8], 2));
