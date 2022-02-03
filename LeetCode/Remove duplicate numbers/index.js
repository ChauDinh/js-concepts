/**
 * Remove duplicates from sorted array
 * 
 * return the length
 */

function removeDuplicates(nums = []) {
  if (nums.length === 0) return 0;
  let first = 0, second = 1;
  while (first < nums.length && second < nums.length) {
    if (nums[first] !== nums[second]) {
      first = second;
      second++;
    } else {
      nums.splice(second, 1);
    }
  }

  return nums.length;
}

function removeDuplicatesV2(nums = []) {
  let frequenceMap = {};
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    frequenceMap[nums[i]] = frequenceMap[nums[i]] ? frequenceMap[nums[i]] + 1 : 1
  }

  for (key in frequenceMap) {
    result.push(parseInt(key));
  }

  return result;
}

console.log(removeDuplicatesV2([1, 1, 2]));

/**
 * 
 * 
 * 
 * 2 3 6 7 9 15 19
 * 
 * 6 7 9 15 19 2 3
 * target = 2
 * nums[mid] = 15
 * 
 * 
 * 9 15 19 2 3 6 7
 * 
 * 15 19 2 3 6 7 9
 * target = 19
 * nums[mid] = 3
 * nums[mid] < target && nums[left] < target
 */
