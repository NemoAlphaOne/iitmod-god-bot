const stdev = require("./stdev.js");
const covariance = require("./covariance.js");

/**
 * Correlation between bivariate data is the measure of how two data sets are
 * related to each other.
 *
 * @param {number[]} x - First data set
 * @param {number[]} y - Second data set
 * @param {boolean} [isSample = true] - Optional parameter to specify whether the list is pre-sorted or not
 * @returns {number} - Correlation of the data set
 * @example
 * correlation([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]); // => 1
 */
function correlation(x, y, isSample = true) {
  const sub = isSample ? 1 : 0;
  const cov = covariance(x, y, sub),
    xstd = stdev(x, sub),
    ystd = stdev(y, sub);

  return cov / xstd / ystd;
}

module.exports = correlation;
