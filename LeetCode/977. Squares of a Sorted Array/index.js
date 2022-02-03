var sortedSquares = function(nums) {
  if (nums.length === 1) return [Math.pow(nums[0], 2)];
  let firstPositiveIdx = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      firstPositiveIdx = i;
      break;
    }
  }
  let squares = nums.map(item => Math.pow(item, 2));
  let result = [];

  if (nums[0] >= 0) {
    return squares;
  } else if (nums[nums.length - 1] <= 0) {
    return squares.reverse();
  } else {
    let first = firstPositiveIdx - 1, second = firstPositiveIdx;
    while (first >= 0 && second < nums.length) {
      if (squares[first] <= squares[second]) {
        result.push(squares[first]);
        first--;
      } else {
        result.push(squares[second]);
        second++;
      }
    }
    while (first >= 0) {
      result.push(squares[first]);
      first--;
    }
    while (second < nums.length) {
      result.push(squares[second]);
      second++;
    }
  }

  return result;
}

console.log(sortedSquares([-3, 0, 2]));