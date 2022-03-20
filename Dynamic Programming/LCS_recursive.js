/**
 * Longest common subsequence - LCS
 * 
 * recursive solution
 */

function main(a = '', b = '') {
  const lcs = (m, n) => {
    if (m < 0 || n < 0) return 0;

    if (a[m] === b[n]) return lcs(m - 1, n - 1) + 1;
    else return Math.max(lcs(m, n - 1), lcs(m - 1, n));
  }

  return lcs(a.length - 1, b.length - 1);
}

console.log(main('aabb', 'ab'));