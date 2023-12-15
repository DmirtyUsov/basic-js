const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  let seasonIndex = -1;

  if (date) {
    seasonIndex = -10;
    if (Object.prototype.toString.call(date) === "[object Date]") {
      const numOwnPropertyName = Object.getOwnPropertyNames(date).length;
      if (numOwnPropertyName || date.toString === 'Invalid Date') {
        seasonIndex = -10;
      } else {
        seasonIndex = Math.floor((date.getMonth() + 1) / 3) % 4;
      }
    }
  }

  switch (seasonIndex) {
    case -10:
      throw new Error("Invalid date!");
      break;
    case -1:
      return 'Unable to determine the time of year!';
      btreak;
    default:
      return seasons[seasonIndex]
  }

}

module.exports = {
  getSeason
};
