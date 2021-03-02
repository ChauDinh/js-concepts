const checkIfExist = function (arr) {
  if (arr.length === 0) return;
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(`${arr[i]}`, { value: arr[i], index: i });
  }

  for (let i = 0; i < arr.length; i++) {
    const hasDoubleI = map.has(`${arr[i] * 2}`);
    const hasDoubleII = map.has(`${arr[i] / 2}`);

    if (hasDoubleI || hasDoubleII) {
      const idxDoubleI = hasDoubleI ? map.get(`${arr[i] * 2}`).index : -1;
      const idxDoubleII = hasDoubleII ? map.get(`${arr[i] / 2}`).index : -1;
      if (i !== idxDoubleI || i !== idxDoubleII) {
        return true;
      }
    }
  }

  return false;
};

console.log(checkIfExist([10, 2, 5, 3, 4]));

// second solution with some()

const checkIfExist2 = (arr) => {
  if (arr.length === 0) return;

  return (
    ((x) => arr.some((n) => n === x * 2 || n === x / 2))(arr.pop()) ||
    checkIfExist(arr)
  );
};

console.log(checkIfExist2([10, 2, 5, 3, 4]));
