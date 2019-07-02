# Analyze the approach

This file we will explain the idea of the Window Sliding technique for those feel struggle with the code.

First, we start with the first index an sum till `k-th` element. We do it for all possible consecutive blocks or groups of k elements. This method requires nested loop, the outer for loop starts with the starting of the block of k elements and the inner of the nested will add up till the k-th element.

Let's consider the code bellow:

```js
// Returns maximum sum in a subarray of size k

const maxSum = (arr, k) {
  if (arr.length < k) return null;
  for (let i = 0; i < arr.length - k + 1; i++) {
    let currentSum = 0;
    for (let j = 0; j < k; j++) {
      currentSum = currentSum + arr[i + j];
    }
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}
```

It can be observed from the above code that the time complexity is O(k\*n) as it contains nested loops.
