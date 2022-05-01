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
  let ind = 1;
  let result = '';

	for (let i = 0; i < str.length; i++) {
		let el = str[i];
		let nextEl = str[i + 1];
		if(el === nextEl) {
			ind++;
		} else {
			if(ind !== 1) {
				result += ind;
			}
      result += el;
      ind = 1;
		}	
	}
	return result;
}

module.exports = {
  encodeLine
};
