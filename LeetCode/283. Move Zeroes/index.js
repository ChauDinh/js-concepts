var moveZeroes = function(nums) {
  if (nums.length === 1) return nums;

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
      nums.splice(i, 1);
      i--;
    }
  }

  for (let i = 1; i <= count; i++) {
    nums.push(0);
  }

  return nums;
};

console.log(moveZeroes([0, 0, 1]));