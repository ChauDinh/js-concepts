/**
 * Tìm số fibonacci thứ Nth
 */

function findFib (n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let first = 1, second = 1;
  for (let i = 2; i <= n; i++) {
    second = first + second;
    first = second - first;
  }

  return first;
}

console.log(findFib(1000));