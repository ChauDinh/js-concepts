# Sorting in JavaScript

In JS, `Array.sort()` uses a hybrid sorting algorithm. Actually, when the size of the array is smaller than 16, they use insertion sort, which takes O(N^2) time complexity and constant in space complexity.