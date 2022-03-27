function solution(A) {
  if (A.length === 0) return 0;
  const markedArray = new Array(1000000).fill(false);

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) markedArray[A[i]] = true;
  }

  for (let i = 1; i < markedArray.length; i++) {
    if (markedArray[i] === false) return i;
  }

  return null;
}

console.log(solution([-2, 2, 0, 4, 5]));

function solutionV2(A) {
  if (A.length === 0) return 0;
  let currItem = 1;

  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0 && A[i] === currItem) {
      currItem = A[i] + 1;
    }
  }

  return currItem;
}

console.log(solutionV2([-2, 2, 0, 4, 5]))