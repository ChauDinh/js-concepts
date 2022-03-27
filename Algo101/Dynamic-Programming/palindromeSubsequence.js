function findMaxPalindrome (A) {
  if (A.length === 0) return 0;

  let p = new Array(A.length + 2).fill(1).map(x => new Array(A.length + 2).fill(1));

  let first = 1, second = A.length;
  while (first < A.length / 2 && second >= A.length / 2) {
    if (A[first] === A[second]) {
      p[first][second] = 2 + p[first + 1][second - 1];
      first++;
      second--;
    } else {
      p[first][second] = Math.max(p[first][second - 1], p[first + 1][second]);
      first++;
      second--;
    }
  }

  return p
}

console.log(findMaxPalindrome('abba'));

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function solveLPS(seq, i, j) {

  // case: only one character
  if (i === j) return 1;

  // case: only two same characters
  if (seq[i] === seq[j] && i + 1 === j) {
    return 2;
  }

  // case: first and last characters match
  if (seq[i] === seq[j]) {
    return solveLPS(seq, i + 1, j - 1) + 2;
  }

  return Math.max(solveLPS(seq, i, j - 1), solveLPS(seq, i + 1, j));
}

console.log(solveLPS('abba', 0, 3));

/**
 * 
 *              L(0, 5)
             /        \ 
            /          \  
        L(1,5)          L(0,4)
       /    \            /    \
      /      \          /      \
  L(2,5)    L(1,4)  L(1,4)  L(0,3)

 */

function solveDpLPS(seq) {
  let length = seq.length;
  let i, j, col;

  let dpTable = new Array(length).fill(0).map(x => new Array(length).fill(0));

  for (let i = 0; i < length; i++) {
    dpTable[i][i] = 1;
  }

  for (col = 2; col <= length; col++) {
    for (i = 0; i < length - col + 1; i++) {
      j = i + col - 1;

      if (seq[i] === seq[j] && col === 2) {
        dpTable[i][j] = 2;
      } else if (seq[i] === seq[j]) {
        dpTable[i][j] = dpTable[i + 1][j - 1] + 2;
      } else {
        dpTable[i][j] = Math.max(dpTable[i][j - 1], dpTable[i + 1][j]);
      }
    }
  }
  
  return dpTable[0][length - 1];
}

console.log(solveDpLPS('ABBA'));