var checkValidString = function(s) {
  let diff = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '*') diff++
      else diff--
      if (diff < 0) return false;
  }
  if (diff === 0) return true
  
  diff = 0;
  for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === ')' || s[i] === '*') diff++
      else diff--
      if (diff < 0) return false;
  }
  return true;
};

var checkValidStringV2 = function(s) {
  let diff = 0;
  let first = 0, second = s.length - 1;
}