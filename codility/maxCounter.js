/**
 * Max Counter
 */

function solution(N, A) {
  let counter = new Array(N).fill(0);
  let max = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      counter[A[i] - 1]++;
      max = Math.max(max, counter[A[i] - 1]);
    } else {
      counter = new Array(N).fill(max);
    }
  }

  return counter;
}

console.log(solution(5, [1, 2, 1, 4, 6, 3]));

/**
 * 0 0 0 0 0
 * 1 0 0 0 0
 * 1 1 0 0 0
 * 2 1 0 0 0
 * 2 1 0 1 0
 * 2 2 2 2 2
 * 2 2 3 2 2
 */
