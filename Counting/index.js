/**
 * Problem 1: Given an array A has n elements.
 * A (L, r, k) query is a query counts # elements equal to k from L to r
 */

function main(A) {
  if (A.length === 0) return;

  function solution(L, R, K) {
    let count = 0;
    for (let i = L; i <= R; i++) {
      if (A[i] === K) count++;
    }

    return count;
  }

  return solution(3, 9, 3); // test
}

/**
 * Problem 2: Given an array A has n elements.
 * There are #Q queries (L_i, R_i, k) 1 <= i <= Q
 */

function main2(A) {
  if (A.length === 0) return;

  function solution(Q = [], K) {
    let count = new Array(A.length).fill(0); // mảng cộng dồn, count[i] minh họa số phần tử bằng K trong đoạn từ 0 đến i
    if (A[0] === K) count[0] = 1;
    else count[0] = 0;
    for (let i = 1; i < A.length; i++) {
      if (A[i] === K) count[i] = count[i - 1] + 1;
      else count[i] = count[i - 1];
    }

    for (let i = 0; i < Q.length; i++) {
      let L = Q[i][0], R = Q[i][1];
      console.log(count[R] - count[L]);
    }

    return;
  }

  return solution([[0, 3], [1, 2], [3, 9]], 2);
}

/**
 * Given an array A has n elements
 * There are #Q queries like (L_i, R_i, K_i) 1<= i <= Q
 * Count 
 */

function main3(A) {
  if (A.length === 0) return;

  function solution(Q = []) {
    let count = new Array(A.length).fill(0).map(x => new Array(100)); // count[i][K] đếm số lần xuất hiện của K trong đoạn từ 0 đến i
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j <= 2; j++) {
        if (A[i] === j) {
          count[i][j] = (i >= 1) ? count[i - 1][j] + 1 : 1
        } else {
          count[i][j] = (i >= 1) ? count[i - 1][j] : 0
        }
      }
    }

    for (let i = 0; i < Q.length; i++) {
      let L = Q[i][0], R = Q[i][1], K = Q[i][2];
      console.log(count[R][K] -  (L >= 1 ? count[L - 1][K] : 0));
    }

    return;
  }

  return solution([[0, 2, 2], [1, 2, 1], [0, 2, 1]]);
}

console.log(main3([1, 1, 1]));