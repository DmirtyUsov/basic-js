const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options) {
  const separator = options.separator || '+';
  const repeatTimes = options.repeatTimes || 1;
  const addition = options.addition === undefined ? '' : String(options.addition);
  const additionSeparator = options.additionSeparator || '|';
  const additionRepeatTimes = options.additionRepeatTimes || 1;

  const additions = Array.from({length: additionRepeatTimes}).map(item => `${addition}`)
  const additionStr = addition ? additions.join(additionSeparator) : '';

  const strs = Array.from({length:repeatTimes}).map(item => `${str}${additionStr}`);

  return  strs.join(separator);
}

module.exports = {
  repeater
};
