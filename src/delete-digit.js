const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = n.toString().split('');
  const arr = [];
  for(let i = 0; i < num.length; i++){
    let newArr = [...num];
    newArr.splice(i, 1);
    arr.push(newArr.join('')); 
  };

  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
