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
    position -= 1; // zero index
    if ((typeof position !== 'number')
      || (position < 0)
      || (position > this.getLength()-1)
   ) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    } else {
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

// console.log(
//   chainMaker
//   .addLink(3.14)
//   .addLink(1)
//   .addLink({ 0: 'first', 1: 'second', 'length': 2 })
//   .removeLink(1)
//   .addLink('DEF')
//   .addLink({ 0: 'first', 1: 'second', 'length': 2 })
//   .removeLink(1)
//   .addLink(true)
//   .addLink(false)
//   .addLink(333)
//   .reverseChain()
//   .reverseChain()
//   .finishChain()
// )

// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0),
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'),
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2),
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)
//( [object Object] )~~( DEF )~~( [object Object] )~~( true )~~( false )~~( 333 )
module.exports = {
  chainMaker
};
