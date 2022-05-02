const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let arr =[];
const chainMaker = {
  getLength() {
    return arr.length;
  },
  addLink(value) {
    if(value === undefined) {
      value = '';
    }
    arr.push("( " + value + " )");
    return this
  },
  removeLink(position) {
    if(typeof position != 'number' || position <= 0 || position > arr.length) {
      arr = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    arr.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    arr.reverse();
    return this
  },
  finishChain() {
    let res = arr.join('~~');
    arr = [];
    return res
  }
};

module.exports = {
  chainMaker
};
