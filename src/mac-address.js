const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const digits = n.split('-');
  const countHexDigit = digits.reduce((count, digit) => (parseInt(digit, 16) || digit === '00') ? count + 1 : 0,0);
  return digits.length === 6 && countHexDigit === 6;
}

module.exports = {
  isMAC48Address
};
