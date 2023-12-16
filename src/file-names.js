const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const statistics = {};
  const newNames = names.map(name => {
    let newName = name;
    if(statistics[name]) {
      newName = newName.concat(`(${statistics[name]++})`);
    } else {
      const indexBrackets = name.search(/\(\d\)/gm);
      if (indexBrackets > -1) {
        const partNameCount = statistics[name.substring(0, indexBrackets)]
        if(partNameCount > 1) {
          newName = newName.concat(`(1)`);
        }
      }
      statistics[name] = 1;
    }
    return newName;
  })

  return newNames;
}

module.exports = {
  renameFiles
};
