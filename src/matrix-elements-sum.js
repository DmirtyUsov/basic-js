const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const cols = Array(matrix[0].length).fill(1);
  let total = 0;
  const newMatrix = matrix.map((row) => row.map((col, idx) => {
    if(col === 0){
      cols[idx] = 0;
    }
    const result = col * cols[idx];
    total += result;
    return result;
  }));
  return total;
}

module.exports = {
  getMatrixElementsSum
};
