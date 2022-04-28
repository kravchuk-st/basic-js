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
  if(!data) {
    return 'Unable to determine the time of year!';
  } else if(data.getMonth !== Data.prototype.getMonth || Object.getOwnPropertyNames(data).length > 0) {
    throw new Error('Invalid data!');
  }

  let month = data.getMonth();

  if(month === 11 || month === 0 || month === 1) {
    return 'winter';
  } else if(month > 1 && month < 5) {
    return 'spring';
  } else if(month > 4 && month < 8) {
    return 'summer';
  } else if(month > 7 && month < 11) {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
