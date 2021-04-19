function solution(A) {
  if (A.length < 3) return 0;
  if (A.length === 3) return 1;

  let result = new Set();

  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      for (let k = j + 1; k < A.length; k++) {
        if (!result.has(`${A[i]}-${A[j]}-${A[k]}`)) {
          result.add(`${A[i]}-${A[j]}-${A[k]}`);
        }
      }
    }
  }

  return result;
}

console.log(solution([1, 12, 1, 2]));
/**
 * [1, 2, 1, 1]
 * 1 2 1
 * 1 2 1
 * 1 1 1
 * 2 1 1
 *
 * => 3
 */
