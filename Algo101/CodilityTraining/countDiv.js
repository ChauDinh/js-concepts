/**
 * Problem: https://app.codility.com/c/run/training92BUEY-XCH/
 */

function solution (A, B, K) {
  if (A === B === 0) return 0;
  if (K === 1) return B - A + 1;
  
  let result = 0;
  for (let step = A; step <= B; step++) {
    if (step % K === 0) {
      result++;
      step += K - 1;
    }
  }

  return result;
} 

console.log(solution(6, 10, 2));

function solutionV2 (A, B, K) {
  if (A === B === 0) return 0;
  return Math.floor(B/K) - Math.ceil(A/K) + 1;
}

console.log(solutionV2(6, 10, 2));