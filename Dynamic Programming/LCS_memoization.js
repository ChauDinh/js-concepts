/**
 * Longest common subsequence - LCS
 * 
 * memoization solution
 */

function main(a = '', b = '') {
  const lcs = (m, n) => {
    if (m < 0 || n < 0) return 0;

    if (a[m] === b[n]) return lcs(m - 1, n - 1) + 1;
    else return Math.max(lcs(m, n - 1), lcs(m - 1, n));
  }

  return lcs(a.length - 1, b.length - 1);
}

function mainV2(a = '', b = '') {
  let lcs = new Array(a.length + 1).fill(0).map(x => new Array(b.length + 1).fill(0));

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        lcs[i][j] = lcs[i - 1][j - 1] + 1;
      }
      else {
        lcs[i][j] = Math.max(lcs[i][j - 1], lcs[i - 1][j]);
      }
    }
  }

  return lcs[a.length][b.length];
}

console.log(mainV2('aab', 'ba'));