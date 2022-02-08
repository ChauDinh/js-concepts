var isPermutation = function(s1, s2) {
  if (s1.length !== s2.length) return false;
  
  let hashMapOfS1 = {}, hashMapOfS2 = {};
  for (let i = 0; i < s1.length; i++) {
      hashMapOfS1[s1[i]] = hashMapOfS1[s1[i]] + 1 || 1;
  }
  for (let i = 0; i < s2.length; i++) {
      hashMapOfS2[s2[i]] = hashMapOfS2[s2[i]] + 1 || 1;
  }
  
  for (keys in hashMapOfS1) {
      if (hashMapOfS1[keys] !== hashMapOfS2[keys]) return false;
  }
  
  return true;
}

var checkInclusion = function(s1, s2) {
  let permutationLength = s1.length;
  let first = 0, second = permutationLength - 1;
  while (first < s2.length && second < s2.length) {
      let currentStr = s2.slice(first, second + 1);
      if (isPermutation(s1, currentStr)) return true;
      first++;
      second++;
  }
  return false;
};