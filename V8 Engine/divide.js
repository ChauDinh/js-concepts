function divide(lhs, rhs) {
  return lhs / rhs;
}

function divideSomeNumbers(lhsArray, divisor, resultArray) {
  for (let i = 0; i < lhsArray.length; i++) {
    resultArray[i] = divide(lhsArray[i], divisor);
  }

  return resultArray;
}

console.log(divideSomeNumbers([2, 4, 6, 8, 12, 10000], 2, []));

var dividers = {
  2: function divideBy2(lhs, unused) {
    return lhs >> 1;
  },
  4: function divideBy4(lhs, unsued) {
    return lhs >> 2;
  },
  undefined: function divideByNumber(lhs, rhs) {
    return lhs / rhs;
  }
};

function divideSomeNumbers2(lhsArray, divisor, resultArray) {
  var divider = dividers[divisor];
  for (let i = 0; i < lhsArray.length; i++) {
    resultArray[i] = divider(lhsArray[i], divisor);
  }

  return resultArray;
}

console.log(divideSomeNumbers2([1, 4, 6, 9, 12, 14], 2, []));
