function arrayContain(arr, e) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === e) return true;
  }
  return false;
}

module.exports.longestConsecutiveSequence = function(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];
    let curStreak = 1;

    while (arrayContain(arr, curNum + 1)) {
      curNum++;
      curStreak++;
    }

    result = Math.max(result, curStreak);
  }

  return result;
};

console.log(
  this.longestConsecutiveSequence([
    1,
    2,
    3,
    4,
    5,
    -200,
    -100,
    6,
    -99,
    -98,
    -97,
    -96,
    -95,
    -94,
    -93,
    -92,
    -91,
    -90
  ])
);
