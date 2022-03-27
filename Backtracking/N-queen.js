/**
 * Given an n*n chessboard, in how many ways we can put n queens
 * such that there is no pair of queens is threaten
 */

/**
 * Backtracking solution
 * 
 * Trying all possible columns for each queen and backtracking
 * as soon as a cell is invalid
 */

function isSave(board, i, j) {
  const lengthBoard = board.length;
  let j_left = j, j_right = j;

  while (i >= 0) {
    if (j_left >= 0 && board[i][j_left] === 1) return false;
    if (board[i][j] === 1) return false;
    if (j_right < lengthBoard && board[i][j_right] === 1) return false;
    --i;
    --j_left;
    ++j_right;
  }
  return true;
}

function nQueen(n) {
  // Initialize the board
  let board = new Array(n).fill(new Array(n).fill(0));
  const length = board.length;

  let result = 0;
  function backtracking(i) {
    if (i === length) {
      return 1;
    } else {
      for (let j = 0; j < length; j++) {
        if (isSave(board, i, j)) {
          board[i][j] = 1;
          console.log('result before: ', result);
          result += backtracking(i + 1);
          console.log('result after: ', result);
          board[i][j] = 0;
        }
      }
    }
    return result;
  }

  return backtracking(0);
}

console.log(nQueen(8));