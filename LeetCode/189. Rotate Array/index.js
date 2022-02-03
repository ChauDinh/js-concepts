var rotate = function(nums, k) {
  let value = k % nums.length;
  let splicePart = nums.splice(0, nums.length - value);
  splicePart.map(item => nums.push(item));
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));