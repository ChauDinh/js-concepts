var twoSum = function(nums, target) {
  let hashSet = new Set();
  for (let i = 0; i < nums.length; i++) {
      if (hashSet.has(target - nums[i])) {
          return [i, nums.indexOf(target - nums[i])];
      } else {
          hashSet.add(nums[i]);
      }
  }
};