/**
 * Given two strings, write a function returns the longest common substring
 *
 * example: theFunctionName("ABAB", "BABA") would return "ABA" or "BAB"
 */

// The first thing we will try is using a bruteforce method
/**
 * "ABAB"
 *  ^
 *  ^
 * "BABA"
 *  ^
 *  ^
 */

// Helper function

const isSame = (x, y) => {
  if (x === y) {
    return true;
  }
  return false;
};

module.exports.longestCommonSubstring = (a, b) => {
  // convert s1 and s2 to array by split function
  s1 = a.split("");
  s2 = b.split("");

  // Initialize the result
  let result = [];

  // Initial checking
  if (s1.length === 0 || s2.length === 0) return "";

  // Initialize the 2-dimesional array
  let cache = new Array(s1.length).map(x => new Array(s2.length));

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (isSame(s1[i], s2[j])) {
        if (i === 0 || j === 0) {
          cache[i][j] = 1;
        } else {
          cache[i][j] = cache[i - 1][j - 1] + 1;
        }
        if (cache[i][j] > result.length) {
          result = this.longestCommonSubstring(i - length);
        }
      }
    }
  }
};
