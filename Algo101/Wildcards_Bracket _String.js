/**
 * This is a problem struggles me in a coding interview
 * 
 * Given a string containing only three types of characters: '(', ')' and '*'
 * Write a function to check whether the string is valid
 * 
 * ((*))
 * 1
 * 2
 * ?
 */

function checkValidString (s = '') {
  if (s.length === 0) return true;
  let currentString = s;

  for (let repeat = 0; repeat < 2; repeat++) {
    let balance = 0;
    for (let i = 0; i < currentString.length; i++) {
      if (currentString[i] === '(' || currentString[i] === '*') {
        balance++;
      } else if (currentString[i] === ')') {
        balance--;
        if (balance < 0) {
          return false;
        }
      }
    }

    currentString = currentString.split('').reverse().map(s => s === '(' ? ')' : s === ')' ? '(' : s).join('');
  }

  return true;
}

console.log(checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"));