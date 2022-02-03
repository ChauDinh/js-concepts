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
  console.log('shiftIndx: ', shiftIndx);
  let first = nums.slice(0, shiftIndx + 1)[0];
  let second = nums.slice(shiftIndx + 1, nums.length)[0];
  
  if (first === -1 && second === -1) {
    return false;
  } else {
    return true;
  }
}

console.log(search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2));