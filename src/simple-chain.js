const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if ((typeof position !== 'number')
      || (position < 1)
      || (position > this.getLength())
   ) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
      // console.log({position}, "throw new Error('You can\'t remove incorrect link!')");
      // return this;
    } else {
      position -= 1; // zero index
      this.chain.splice(position, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this;
  },
  finishChain() {
    let result = '';
    result = this.chain.map(link => `( ${String(link)} )`).join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
