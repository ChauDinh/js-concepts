const binarySearch = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const detectShift = function (nums) {
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

const search = function (nums, target) {
  let shiftIndx = detectShift(nums);
  let result = -1;
  if (nums[shiftIndx] === target) {
    return shiftIndx;
  }
  let first = binarySearch(nums.slice(0, shiftIndx + 1), target);
  let second = binarySearch(nums.slice(shiftIndx + 1, nums.length), target);
  
  if (first === -1 && second === -1) {
    return result;
  } else {
    if (first !== -1) {
      return first;
    }
    if (second !== -1) {
      return shiftIndx + second + 1;
    }
  }
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 2));