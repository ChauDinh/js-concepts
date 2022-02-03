var detectShift = function(nums) {
  let left = 0, right = nums.length - 1;
  let ans = 0;
  while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] > nums[left]) {
          ans = mid;
          left = mid;
      } else {
          right = mid;
      }
  }
  
  return ans;
}

var findMin = function(nums) {
  if (nums.length === 1) return nums[0]
  
  let shiftIndx = detectShift(nums);
  let first = nums.slice(0, shiftIndx + 1)[0];
  let second = nums.slice(shiftIndx + 1, nums.length)[0];
  return Math.min(first, second);
};

console.log(findMin([1]));