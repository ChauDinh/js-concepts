# LeedCode 128. Longest Consecutive Sequence

Note: This challenge is tagged as a `hard` problem on Leedcode.

<b>Problem:</b> Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

<i>Note:</i> Your algorithm should run in O(n) time, which n is the length of the array.

<b>Example:</b>

```
Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explaination: The longest consecutive elements sequence is [1, 2, 3, 4]. Hence, the its length is 4.
```

As other challenge I've met, I usually come with a brute force solution.

```js
function arrayContain(arr, e) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === e) return true;
  }
  return false;
}

function longestConsecutiveSequence(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i];
    let curStreak = 1;

    while (arrayContain(arr, curNum + 1)) {
      curNum++;
      curStreak++;
    }

    result = Math.max(result, curStreak);
  }

  return result;
}
```

Let's explain the idea of the above solution.

First, we check the first element of the array (at index = 0). At this state, we also create a curNum (assigned the current element) and a curStreak (assigned 1).

Then we loop through the array to check that whether there is curNum+1 in the array or not. If the answer is yes, we increase the curNum and the curStreak. The result is the maximum value between result and the curStreak.

This solution run in O(n^3) since we have a while loop in a for loop, then in while loop, we also have a for loop which is described in arrayContain helper function.
