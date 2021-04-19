/**
 * Binary Gap
 *
 * 1 0 0 0 1 0 0 1 0 1 => 3
 *
 *
 */

function solution(N) {
  const bin = N.toString(2).split("");
  let max = 0; // the initial maximum gap
  let currMax = 0; // the current maximum gap
  let left = 0;
  let right = 1;

  while (left < right && right < bin.length) {
    if (bin[left] === "0") {
      left++;
      right++;
      currMax = 0;
    } else {
      if (bin[right] === "0") {
        currMax++;
        right++;
      } else {
        max = Math.max(currMax, max);
        currMax = 0;
        left = right;
        right++;
      }
    }
  }

  return max;
}

console.log(solution(32));
