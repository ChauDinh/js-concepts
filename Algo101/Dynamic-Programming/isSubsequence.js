function isSubsequence(a, b) {
  if (a.length === 0 || b.length === 0) return false
  
  let first = 0, second = 0;
  while (first < a.length && second < b.length) {
    if (a[first] === b[second]) {
      first++;
      second++;
    } else {
      first++;
    }
  }
  if (second < b.length) return false;
  return true;
}

console.log(isSubsequence('aabb', 'ba'));