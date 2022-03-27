function solveLCS (a, b) {
  function LCS(n, m) {
    if (n * m === 0) return 0;
    
    if (a[n-1] === b[m-1]) return LCS(n-1, m-1) + 1;
    return Math.max(LCS(n-1, m), LCS(n, m-1));
  }

  return LCS(a.length, b.length);
}

function dpLCS (a, b) {
  if (a.length * b.length === 0) return 0;

  
}

// 2-Dimension array
let newArr = new Array(3).fill(0).map(item => new Array(3))

console.log('new array: ', newArr);