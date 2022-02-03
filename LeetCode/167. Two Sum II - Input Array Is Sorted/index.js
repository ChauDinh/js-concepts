var twoSum = function(numbers, target) {
  let first = 0, second = numbers.length - 1;
  while (first < second) {
    if (numbers[first] + numbers[second] < target) {
      first++;
    } else if (numbers[first] + numbers[second] > target) {
      second--;
    } else {
      return [first + 1, second + 1];
    }
  }
};

console.log(twoSum([2, 3, 4], 6));