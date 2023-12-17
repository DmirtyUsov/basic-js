const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixRows = matrix.length;
  const matrixCols = matrix[0].length;
  const newMatrix = Array.from({ length:matrixRows }, () => (
    Array.from({ length:matrixCols }, ()=> 1)));

  for (let row = 0; row < matrixRows; row += 1) {
    for (let col = 0; col < matrixCols; col += 1) {
      if(matrix[row][col] === true) {
        continue;
      }
      let mines = 0
      for (let rowNear = row - 1; rowNear < row + 2; rowNear += 1) {
        if(rowNear < 0 || rowNear >= matrixRows) {
          continue;
        }
        for(let colNear = col - 1; colNear < col + 2; colNear += 1) {
          if(colNear < 0 ||colNear >= matrixCols) {
            continue;
          }
          if (colNear === col && rowNear === row) {
            continue;
          }
          mines += matrix[rowNear][colNear] === true ? 1 : 0;
        }
      }
      newMatrix[row][col] = mines;
    }
  }
  return newMatrix;
}

module.exports = {
  minesweeper
};
