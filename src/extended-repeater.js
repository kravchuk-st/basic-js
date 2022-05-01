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
function repeater(str, options) {
  let result = '';
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let addition = '';
  if(options.hasOwnProperty('addition')) addition = options.addition + '';
  let additionSeparator = options.additionSeparator ? options.additionSeparator + '' : '|';
  str += '';

  for(let i = 0; i < repeatTimes; i++) {
    result += str;
    if(addition !== '') {
      for(let j = 0; j < additionRepeatTimes; j++) {
        result += addition;
        if (additionSeparator && j + 1 < additionRepeatTimes) {
          result += additionSeparator;
        }
      }
    }

    if (separator && i + 1 < repeatTimes) {
      result += separator;
    }
  }
  return result;
}

module.exports = {
  repeater
};
