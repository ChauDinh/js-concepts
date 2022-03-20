/**
 * Checking whether a string (B) is a sequence of another string (A)
 */

function main(A = '', B = '') {
  if (A.length === 0 || B.length === 0) return '';

  let result = 0;
  let i = 0, j = 0;
  while (i < A.length && j < B.length) {
    if (A[i] === B[j]) {
      result++
      i++;
      j++;
    } else {
      i++;
    }
  }
  return result === B.length;
} // O(A.length + B.length)

console.log(main('abcdgh', 'acdga'));