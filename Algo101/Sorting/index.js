function simplestSort(arr = []) {
  if (arr.length === 0 || arr.length === 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }

  return arr;
}

console.log(simplestSort([4, 4, 3, 2]));

