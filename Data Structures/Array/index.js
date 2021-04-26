/**
 * Get products of all other elements
 *
 * Given an array of integers, return new array such that each element at index i of
 * the new array is the product of all the numbers in the original array except the one at i.
 */

function products(input) {
  if (input.length === 0) return [];

  let prod = 1;
  for (let i = 0; i < input.length; i++) {
    prod *= input[i];
  }

  let results = new Array(input.length).fill(null);
  for (let i = 0; i < input.length; i++) {
    results[i] = prod / input[i];
  }

  return results;
}

console.log(products([1, 2, 3, 4, 5]));

function productsFollowingUp(input) {
  if (input.length === 0) return [];

  // Precomputing prefix sum
  let prefix = new Array(input.length).fill(null);
  for (let i = 0; i < input.length; i++) {
    if (prefix[i - 1]) {
      prefix[i] = prefix[i - 1] * input[i];
    } else {
      prefix[i] = input[i];
    }
  }

  // Precomputing suffix sum
  let suffix = new Array(input.length).fill(null);
  let reverseInput = input.reverse();
  for (let i = 0; i < reverseInput.length; i++) {
    if (suffix[i - 1]) {
      suffix[i] = suffix[i - 1] * reverseInput[i];
    } else {
      suffix[i] = reverseInput[i];
    }
  }
  suffix.reverse();

  // Compute the results based on subarray results
  let results = new Array(input.length).fill(null);
  for (let i = 0; i < results.length; i++) {
    if (i === 0) {
      results[i] = suffix[i + 1];
    } else if (i === results.length - 1) {
      results[i] = prefix[i - 1];
    } else {
      results[i] = prefix[i - 1] * suffix[i + 1];
    }
  }

  return results;
}

console.log(productsFollowingUp([1, 2, 3, 4, 5]));

/**
 * Locate smallest window to be sorted
 *
 * Given an array of integers, determine the smallest bound of window that must be sorted in order for
 * the entire array to be sorted.
 */

function smallestWindow(input) {
  if (input.length === 0) return [];

  const inputSorted = [...input].sort((a, b) => a - b);

  let left = null;
  let right = null;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== inputSorted[i] && left === null) {
      left = i;
    } else if (input[i] !== inputSorted[i]) {
      right = i;
    }
  }

  return [left, right];
}

console.log("smallest window: ", smallestWindow([3, 7, 5, 6, 9]));

function smallestWindow2(input) {
  if (input.length === 0) return [];

  // Determine right bound
  let currMax = Number.MIN_VALUE;
  let right = null;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < currMax) {
      right = i;
    } else {
      currMax = input[i];
    }
  }

  // Determine left bound
  let currMin = Number.MAX_VALUE;
  let left = null;
  for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] > currMin) {
      left = i;
    } else {
      currMin = input[i];
    }
  }

  return [left, right];
}

console.log("smallest window 2: ", smallestWindow2([3, 7, 5, 6, 9]));

/**
 * Calculate maximum subarray sum
 *
 * Given an array of integers, find the maximum of continuous subarray
 */

function maxSum(input) {
  if (input.length === 0) return 0;

  function sumArr(i, j) {
    let sum = 0;
    for (let k = i; k <= j; k++) {
      sum += input[k];
    }
    return sum;
  }

  let currMax = Number.MIN_VALUE;
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      currMax = Math.max(currMax, sumArr(i, j));
    }
  }

  return currMax;
}

console.log("max sum: ", maxSum([1, 2, 3, 4, 5]));

function maxSum2(input) {
  if (input.length === 0) return 0;
  let maxAtIndex = 0;
  let maxGlobal = 0;
  for (let i = 0; i < input.length; i++) {
    maxAtIndex = Math.max(input[i], maxAtIndex + input[i]);
    maxGlobal = Math.max(maxGlobal, maxAtIndex);
  }

  return maxGlobal;
}

console.log("max sum 2: ", maxSum2([34, -50, 42, 14, -5, 86]));
