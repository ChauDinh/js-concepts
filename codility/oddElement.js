/**
 * Odd element of array
 */

function solution(A) {
  if (A.length === 1) return A[0];
  let frequency = {};

  for (let i = 0; i < A.length; i++) {
    frequency[A[i]] = frequency[A[i]] + 1 || 1;
  }

  for (el in frequency) {
    if (frequency[el] % 2 !== 0) {
      return +el;
    }
  }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
