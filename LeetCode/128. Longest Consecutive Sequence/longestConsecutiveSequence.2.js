// The second solution for LeedCode 128. The Longest Consecutive Sequence

module.exports.longestConsecutiveSequence2 = arr => {
  if (arr.length === 0) return null;

  arr = arr.sort((a, b) => a - b);
  let result = 1;
  let curStreak = 1;

  // we will start with the second number
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      if (arr[i] === arr[i - 1] + 1) {
        curStreak++;
      } else {
        // current streak ends
        result = Math.max(result, curStreak);
        curStreak = 1;
      }
    } // skip equal
  }

  return Math.max(result, curStreak);
  // I have a question here for you: Why we have to check and return the maximum instead of the value of result?

  // Check the readme.md file attached in this folder for more information.
};

console.log(this.longestConsecutiveSequence2([1, 2, 3, 4, 5]));
