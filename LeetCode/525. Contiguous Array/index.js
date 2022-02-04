/**
 * Given a binary array of [0, 1], return the maximum length of a contiguous subarray with equal number 1 and 0
 * 
 * 1 0 0 1 0 1
 * 0 0 0 1 0 1
 * 
 */

var findMaxLength = function(nums) {
  if (nums.length < 2) return 0;
  let sum = [];
  let map = {};
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) sum[i] = (sum[i - 1] || 0) - 1;
    if (nums[i] === 1) sum[i] = (sum[i - 1] || 0) + 1;
  }
  console.log('sum: ', sum);

  for (let i = 0; i < sum.length; i++) {
    if (map[sum[i]] === undefined) {
      map[sum[i]] = i;
    }
  }
  console.log('map: ', map);

  for (let i = 0; i < sum.length; i++) {
    if (sum[i] === 0) {
      result = Math.max(result, i + 1);
    } else {
      result = Math.max(result, i - map[sum[i]])
    }
  }

  return result;
};

console.log(findMaxLength([1, 0, 0, 1, 0, 1]));