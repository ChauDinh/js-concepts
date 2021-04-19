/**
 * Rotate Array
 *
 * A = [3, 8, 9, 7, 6]
 * K = 3
 *
 * [3, 8, 9, 7, 6] => [6, 3, 8, 9, 7] => [7, 6, 3, 8, 9] => [9, 7, 6, 3, 8]
 */

function solution(A, K) {
  if (A.length === 0 || A.length === 1) return A;
  if (K === 0) return A;

  for (let i = 1; i <= K; i++) {
    let curr = A.splice(A.length - 1, 1);
    A.unshift(curr[0]);
  }

  return A;
}

console.log(solution([3, 8, 9, 7, 6], 3));
