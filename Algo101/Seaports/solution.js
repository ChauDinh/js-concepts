
/**
 * @param {*} m number of seaports
 * @param {*} n number of ships
 * @param {*} T an array of start-end time of each ship. Ex: [{s: 12, f: 13}] ~ start: 12:00 - finish: 13:00 
 * 0 <= s <= f <= 10^5
 * 
 * Output:
 * Number of ships can be served
 * And an array of integers represent the seaport index holding the ith ship. If not, the ith value is 0
 * 
 * Ex:
 * Input: m=2, n=5, T=[{s: 0, f: 3}, {s: 3, f: 5}, {s: 0, f: 2}, {s: 2, f: 5}, {s: 1, f: 4}]
 * Output: 4, [1, 1, 2, 2, 0]
 */

function normalizeTimeData (T = []) {
  if (T.length === 0) return [];

  let result = [];
  T.map(t => result.push({s: t.s}, {f: t.f}));
  
  return result;
}

function sortBasedTime (T = []) {
  const normalizedData = normalizeTimeData(T);
  return normalizedData.sort((a, b) => {
    const diff = Object.values(a) - Object.values(b);
    if (Object.values(a) === Object.values(b)) {
      return Object.values(b) - Object.values(a);
    }
    return diff;
  })
}

function solution (m, n, T) {
  let count = 0;
  let countMax = 0;
  const sortTime = sortBasedTime(T);
  sortTime.map((time, idx) => {
    if (Object.keys(time)[0] === 's') {
      ++count;
    } else {
      --count;
    }
    countMax = Math.max(count, countMax);
  })
  return countMax;
}

console.log(solution(2, 5, [{s: 0, f: 3}, {s: 3, f: 5}, {s: 0, f: 2}, {s: 2, f: 5}, {s: 1, f: 4}]));