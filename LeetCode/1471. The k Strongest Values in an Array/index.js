const getKStrongest = (arr = [], k) => {
  if (arr.length === 0) return [];
  if (k === 0) return [];

  arr.sort((a, b) => a - b);

  let median = arr[Math.floor((arr.length - 1) / 2)];

  arr.sort((a, b) => Math.abs(a - median) - Math.abs(b - median));

  arr.splice(0, arr.length - k);

  return arr;
};

console.log(getKStrongest([-7, 22, 17, 3], 2));
