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
