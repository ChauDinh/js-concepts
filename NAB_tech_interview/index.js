function newPassword(a, b) {
  // Write your code here
  const strAArr = a.split("");
  const strBArr = b.split("");
  let result = [];
  let first = 0, second = 0;
  
  while (first < strAArr.length || second < strBArr.length) {
      console.log('current i j: ', first, second);
      result.push(strAArr[first], strBArr[second]);
      console.log("🚀 ~ file: index.js ~ line 10 ~ newPassword ~ result", result);
      ++first;
      ++second;
  }
  
  while (first < strAArr.length) {
      result.push(strAArr[first]);
  }
  
  while (second < strBArr.length) {
      result.push(strBArr[second]);
  }
  
  return result.join("");
}

console.log(newPassword('abc', 'dc'));