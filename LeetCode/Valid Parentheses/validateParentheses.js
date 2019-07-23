/**
 * Valid Parentheses
 *
 * Given a string containing "(", ")", "[", "]", "{" and "}".
 * Determine whether the string is valid.
 *
 * Notes:
 * Open brackets must be closed by the same type of brackets
 * Open brackets must be closed in the correct order.
 * An empty string is also considered valid.
 *
 *
 */

// Solution

/**
 * We put opened-type brackets in a stack (a last-in-first-out structure) respectively
 * If we meet a closed-type bracket, we pop the latest bracket out of the stack if their type is the same. And we will return false immediately on the other hand.
 */

// Helper function: check if the top and current character have the same type or not
const isMatched = (x, y) => {
  const openChar = ["(", "[", "{"];
  const closeChar = [")", "]", "}"];
  if (openChar.indexOf(x) !== closeChar.indexOf(y)) {
    return false;
  }
  return true;
};

module.exports.isValid = inputString => {
  // Check special cases
  if (inputString.length === 0) {
    return true;
  }

  // Initialize the stack
  const stack = [];

  // Put the opened-type brackets into the stack and pop out the top if we meet closed one.
  for (let character of inputString) {
    const isOpenChar = ["(", "[", "{"].includes(character);
    if (isOpenChar) {
      stack.push(character);
    } else {
      const top = stack.pop();
      const check = isMatched(top, character);
      if (check === false) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isMatched("[", "]"));
console.log(this.isValid("(]"));
console.log(this.isValid(""));
