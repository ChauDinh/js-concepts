# Analyze the approach

This file we will explain the idea of the Window Sliding technique for those feel struggle with the code.

First, we start with the first index an sum till `k-th` element. We do it for all possible consecutive blocks or groups of k elements. This method requires nested loop, the outer for loop starts with the starting of the block of k elements and the inner of the nested will add up till the k-th element.

Let's consider the code bellow:

```js
// Returns maximum sum in a subarray of size k

const maxSum = (arr, k) {
  if (arr.length < k) return null;
  let max = 0;
  for (let i = 0; i < arr.length - k + 1; i++) {
    let currentSum = 0;
    for (let j = 0; j < k; j++) {
      currentSum = currentSum + arr[i + j];
    }
    max = Math.max(currentSum, max);
  }
  return max;
}
```

It can be observed from the above code that the time complexity is O(k\*n) as it contains nested loops.

### Window Sliding Technique

The technique can be best understood with the window pane in bus. Consider a window of lenght n and the pane which is fixed in it of length k.

Initially, the pane is at extreme left (index = 0, in array). Now, correlate the window with an array of size n and plane with `current-sum` of size k elements.

Now, if we apply force on the window such that it moves a unit distance ahead. The pane will cover next `k` consecutive elements.

We will take an example to apply the idea of this technique practically.

Given an array `arr[] = [5, 2, -1, 0, 3]` and the `k = 3`.

There are several steps we would consider:

- Compute the sum of the first k elements out of n terms using linear loop and store the sum in a variable - we called it is window_sum.

- Next, we will graze linearly over the array till it reaches the end and simulaneously keep track of maximum sum.

- To get the current sum of block of k elements just subtrack the first element from the previous block and add the last element of the current block.

![illustration](https://media.geeksforgeeks.org/wp-content/uploads/sliding-window1.png)

This is the initial phase where we have calculated the initial `window_sum` starting from the index = 0. In this example, `window_sum = 6`. Now we set the maximum_sum as current_window = 6.

Then, we slide the window by a unit index.

![illustration](https://media.geeksforgeeks.org/wp-content/uploads/sliding-window2.png)

It would discard 5 from the window and add 0 to the window. Hence, we will get the new window sum by subtracting 5 and adding 0 to it.

We compare this window with the maximum_sum. As it is smaller we won't change the value of maximum_sum.

Similarly, we slide our window by a unit index and obtain the new window sum to be 2.

![illustration](https://media.geeksforgeeks.org/wp-content/uploads/sliding-window3.png)

Again, it's smaller than the maximum_sum so we don't change the value of maximum_sum. Therefore, the result of this example is `6`.
