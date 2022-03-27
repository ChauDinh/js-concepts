/**
 * This problem was asked by Google
 * 
 * Given a sorted array of integers, square the elements of the array and
 * give the output in sorted order
 * 
 * Ex: [-9, -2, 0, 2, 3]
 * Output: [0, 4, 4, 9, 81]
 */

class Solution {
  constructor(input) {
    this.input = input || [];
  }

  answer() { // O(nlogn)
    const shadowCopyInput = [...this.input];
    let squareNumbers = shadowCopyInput.map((number) => number * number); // O(n);

    return squareNumbers.sort((a, b) => a - b); // O(nlogn);
  }

  optimizedAnswer() {
    const shadowCopyInput = [...this.input];
    const result = [];
    let first = 0, second = shadowCopyInput.length - 1;

    /**
     * [-9, -2, 0, 2, 3]
     * first           second
     * 
     */
    while (first <= second) {
      const firstSquare = Math.pow(shadowCopyInput[first], 2);
      const secondSquare = Math.pow(shadowCopyInput[second], 2);
      if (firstSquare < secondSquare) {
        result.unshift(firstSquare);
        first++;
      } else {
        result.unshift(secondSquare);
        second--;
      }
    }

    return result;
  }

  logger() { // O(nlogn)
    const result = this.answer();
    console.log('result: ', result);
    return;
  }

  optimizedLogger() {
    const result = this.optimizedAnswer();
    console.log('result: ', result);
    return;
  }
}

const solution = new Solution([-9, -2, 0, 2, 3]);
solution.logger(); // O(nlogn)
solution.optimizedLogger();


