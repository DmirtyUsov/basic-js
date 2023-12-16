const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const statistics = [];
  let prevChar;
  let count = 0;
  for (const char of str.split('')) {
    if(prevChar === char) {
      count += 1;
      continue;
    } else {
      if(prevChar)
      {
        const data = {};
        data[prevChar] = count;
        statistics.push(data);
      }
      prevChar = char;
      count = 1;
    }
  }
  if(prevChar) {
    const remainingData = {};
    remainingData[prevChar] = count;
    statistics.push(remainingData);
  }

  let result = '';
  for(const item of statistics){
    const char = Object.keys(item)[0];
    const times = item[char];
     result = result.concat(`${times > 1 ? times : ''}${char}`);
  }

  return result;
}

module.exports = {
  encodeLine
};
