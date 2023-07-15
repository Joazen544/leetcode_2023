var isValidSudoku = function (board) {
  let row = [];
  let column = [];
  let block = [];

  for (let i = 0; i < 9; i++) {
    row[i] = new Map();
    column[i] = new Map();
  }

  for (let i = 0; i < 3; i++) {
    block[i] = [];
    for (let j = 0; j < 3; j++) {
      block[i][j] = new Map();
    }
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != ".") {
        if (row[i].get(board[i][j]) == 1 || column[j].get(board[i][j]) == 1) {
          return false;
        }

        if (block[Math.trunc(i / 3)][Math.trunc(j / 3)].get(board[i][j]) == 1) {
          return false;
        }

        row[i].set(board[i][j], 1);
        column[j].set(board[i][j], 1);
        block[Math.trunc(i / 3)][Math.trunc(j / 3)].set(board[i][j], 1);
      }
    }
  }
  return true;
};

let board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
