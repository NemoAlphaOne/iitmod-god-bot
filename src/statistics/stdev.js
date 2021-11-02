const variance = require("./variance.js");

/**
 * The standard deviation is also a measure a deviation. It is the square root
 * of the variance of the data set.
 *
 * @param {number[]} data - Input data set
 * @param {boolean} [isSample = true] - Optional parameter to specify the type of data set
 * @returns {number}
 */
function stdev(data, isSample = true) {
  return Math.sqrt(variance(data, isSample));
}

module.exports = stdev;
