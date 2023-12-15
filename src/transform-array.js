const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let commandPrev ='';
  let prevNotDiscarded = true;

  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  console.log(arr);

  return arr.reduce((newArray, item) => {
    if (typeof item === 'string') {
      if (item.startsWith('--')) {
        switch (item) {
          case '--discard-next':
          case '--double-next':
            commandPrev = item;
            return newArray;
            break;
          case '--double-prev':
            if(prevNotDiscarded && newArray.length) {
              newArray.push(newArray[newArray.length - 1]);
            }
            prevNotDiscarded = true;
            return newArray;
            break;
          case '--discard-prev':
            if(prevNotDiscarded) {
              newArray.pop();
            }
            prevNotDiscarded = true;
            return newArray;
            break;
          }
      }
    }
  
    switch (commandPrev) {
      case '--discard-next':
        prevNotDiscarded = false;
        break;
      case '--double-next':
        newArray.push(item);
      default:
        if(item !== undefined) {
          newArray.push(item);
        }
    }
    commandPrev = '';
  
    return newArray;
  },[])
}

module.exports = {
  transform
};
