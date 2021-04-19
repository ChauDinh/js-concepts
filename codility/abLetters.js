function solution(S) {
  let strArr = S.split("");
  let first = 0;
  let second = 1;

  while (second > first && second < S.length) {
    if (strArr[first] === "b") {
      if (strArr[second] === "a") {
        return false;
      } else {
        first = second;
        second++;
      }
    } else {
      first = second;
      second++;
    }
  }

  return true;
}

console.log(solution("aabbabb"));

/**
 * aabbb => true 11000
 * ba => false 01
 * aaa => true 111
 * b => true 0
 * abba => false 1001
 */
