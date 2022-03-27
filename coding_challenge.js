/**
 * input: cat, car, bar
 * 
 * function setup(input)
 * 
 * function isInDict(word)
 * 
 * setup("cat", "car", "bar");
 * isInDict("cat"); // true
 * isInDict("bat"); // false
 */

class Dictionary {
  constructor(input) {
    this.wordsArray = input || [];
    this.dict = null;
  }

  setup() {
    this.dict = new Set(this.wordsArray);
  }

  isInDict(word) {
    return this.dict.has(word);
  }
}

class Solution {
  constructor(input) {
    this.inputArray = input || [];
  }
  
  logger(word) {
    const dict = new Dictionary(this.inputArray);
    dict.setup();
    const result = dict.isInDict(word);
    console.log('result: ', result);
    return;
  }
}

const solution = new Solution(["cat", "car", "bar"]);
solution.logger('car');
solution.logger('cat');
solution.logger('bat');