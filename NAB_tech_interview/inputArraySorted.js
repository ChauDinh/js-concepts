/**
 * Binary search algorithm
 */

const binarySearch = (array, target) => {
  let left = 0, right = array.length;

  while (left < right) {
    let median = left + Math.floor((right - left) / 2);

    if (array[median] < target) {
      left = median + 1;
    } else {
      right = median;
    }
  }
  return left;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));

/**
 * Trick: Leftmost binary search
 * 
 * If the element exists, finds its leftmost index
If it doesn’t exists, locate the index of where it should be

LeetCode 34. Find First and Last Position of Element in Sorted Array
 */

const leftMostBinarySearch = (arrays, target) => {
  let left = 0, right = arrays.length;
  
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arrays[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

console.log(leftMostBinarySearch([1, 2, 4, 5], 3));