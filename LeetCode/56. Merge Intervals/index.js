const merge = (intervals = []) => {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a = [], b = []) => {
    return a[0] - b[0];
  });

  let result = [[intervals[0][0], intervals[0][1]]];
  for (let i = 1; i < intervals.length; i++) {
    // overlapped
    if (result[result.length - 1][1] >= intervals[i][0]) {
      if (result[result.length - 1][1] >= intervals[i][1]) {
        continue;
      } else {
        let tempStart = result[result.length - 1][0];
        let tempEnd = intervals[i][1];
        result.pop();
        result.push([tempStart, tempEnd]);
      }
    } else {
      result.push([intervals[i][0], intervals[i][1]]);
    }
  }

  return result;
};

console.log(
  merge([
    [1, 3],
    [4, 5],
  ])
);
