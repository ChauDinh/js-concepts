/**
 * Minimum largest missing integer
 */

function solution(A) {
  let currMax = 0;
  let currMin = Number.MAX_VALUE;
  for (let i = 0; i < A.length; i++) {
    currMax = Math.max(currMax, A[i]);
    currMin = Math.min(currMin, A[i]);
  }

  if (currMax <= 0) return 1;

  let max = currMax;
  while (currMax >= currMin) {
    currMax--;
    if (!A.includes(currMax)) {
      return currMax;
    } else {
      continue;
    }
  }

  return currMin > 1 ? 1 : max + 1;
}

console.log(solution([90, 91, 92, 93]));
