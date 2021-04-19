/**
 * Sum split
 *
 * A = [3, 1, 2, 4, 3]
 * P = 1 => |3 - 10| = 7
 * P = 2 => |4 - 9| = 5
 * P = 3 => |6 - 7| = 1
 * P = 4 => |10 - 3| = 7
 *
 * => P = 3 => 1
 */

function solution(A) {
  let leftNum = 0;
  let rightNum = A.reduce((a, b) => a + b);
  let answer = null;
  for (let i = 0; i < A.length - 1; i++) {
    leftNum += A[i];
    rightNum -= A[i];
    const diff = Math.abs(leftNum - rightNum);
    if (answer === null || answer > diff) {
      answer = diff;
    }
  }
  return answer;
}

console.log(solution([3, 1, 2, 4, 3]));
