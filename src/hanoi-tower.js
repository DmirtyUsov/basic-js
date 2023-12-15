const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
 //a tower of n disks, there will be required 2n − 1 transfers of individual disks
 // to shift the tower completely to another peg
  const turns = 2 ** disksNumber - 1;
  const seconds = Math.floor(turns * 1 / turnsSpeed * 60 * 60);
  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
