/**
 * Given a word W and a string S, find all indices in S which are the starting position of anagram of W.
 * 
 * For example: W = ab, S = abxaba
 * return: [0, 3, 4]
 */

const isAnagram = (string = '', word = '') => {
  return string === word || Array.from(string).reverse().join('') === Array.from(word).join('')
}

const solution = (string = '', word = '') => {
  if (string.length === 0 || word.length === 0) return [];
  let i = 0;
  let stringLength = string.length;
  let result = [];
  while (i <= word.length - stringLength + 1) {
    const sliceStr = word.slice(i, i + stringLength);
    if (isAnagram(sliceStr, string)) {
      result.push(i);
    }
    i++;
  }

  return result;
}

console.log(solution('ab', 'abxaba'));
