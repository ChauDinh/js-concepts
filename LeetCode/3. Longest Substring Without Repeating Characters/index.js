var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) return s.length;
  let maxCount = 0;
  let i = 0, j = 0;
  let uniqueSet = new Set();
  while (i < s.length && j < s.length) {
      if (!uniqueSet.has(s[j])) {
          uniqueSet.add(s[j]);
          maxCount = Math.max(maxCount, j - i + 1);
          j++;
      } else {
          uniqueSet.delete(s[i]);
          i++;
      }
  }
  
  return maxCount;
};

console.log(lengthOfLongestSubstring('abcabcbb'));