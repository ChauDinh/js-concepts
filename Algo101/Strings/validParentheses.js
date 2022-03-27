function validParenthesisV1(str = '') {
  if (str.length === 0 || str.length === 1) return false;

  let myStack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') myStack.push('(');
    else {
      if (myStack.length === 0) return false;
      myStack.pop();
    }
  }

  return myStack.length === 0;
}

console.log(validParenthesisV1('('));

function validParenthesisV2(str = '') {
  const strLength = str.length;
  if (strLength === 0) return true;

  // Initial dp table
  const dp = new Array(strLength).fill(new Array(strLength).fill(false));

  for (let i = 0; i < strLength; i++) {
    if (str[i] === '*') dp[i][i] = true;
  }
}

