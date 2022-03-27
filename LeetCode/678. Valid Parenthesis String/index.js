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
  let diffStar = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') diff++;
    else if (s[i] === '*') {
      diffStar++;
      if (diff > 0) {
        diff--;
        diffStar--;
      }
      else {
        diff++;
        diffStar--;
      }
    }
    else {
      if (diff > 0) diff--;
      else {
        diffStar++;
        diff++;
        diffStar--;
      }
    }
  }
  console.log(diff)

  return (diff >= 0) && (diffStar >= 0);
}

console.log(checkValidStringV2('())'))