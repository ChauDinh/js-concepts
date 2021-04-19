/**
 * frog jump
 */

function solution(X, A) {
  let set = new Set();
  for (let i = 1; i <= X; i++) {
    set.add(i);
  }

  for (let i = 0; i < A.length; i++) {
    if (set.has(A[i])) {
      set.delete(A[i]);
    }
    if (set.size === 0) {
      return i;
    }
  }

  return -1;
}

console.log(solution(2, [2, 2, 2, 2, 2]));
