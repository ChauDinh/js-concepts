/**
 * Missing integer
 */

function solution(A) {
  let set = new Set();
  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
  }
  for (let i = 1; i <= A.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}

console.log(solution([2, 3, 1, 5]));
