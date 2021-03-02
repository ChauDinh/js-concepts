/**
 * Given a set of candidate numbers without duplicates and a target number. Write a function
 * returns all unique combinations in candidates summing to the target.
 *
 * Notes: The same repeated numbers maybe chosen from unlimited times.
 *
 * Exp: Input candidates = [2, 3, 5], target = 8;
 * Output: [
 *  [2, 2, 2, 2],
 *  [2, 3, 3],
 *  [3, 5]
 * ]
 */

const combinationSum = (candidates, target) => {
  let combinations = [];
  let idx = 0;

  // Sorting the candidates array
  candidates.sort((a, b) => a - b);

  // Check the special case, target = 0;
  if (target === 0) return [];
};

combinationSum([1, 2, 2], 0);
