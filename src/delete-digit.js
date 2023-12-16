const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('');
  const numbers = [];

  digits.forEach((item, index) => {
    const newDigits = digits.reduce((digits, currDigit, idx) => {
      if(idx !== index) {
        digits.push(currDigit);
      }
      return digits;
    }, []);
    numbers.push(+newDigits.join(''))
  })

  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
