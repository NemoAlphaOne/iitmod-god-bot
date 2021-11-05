const { DataSetError, DataSetSizeError } = require("../utils/errors");
const mean = require("./mean.js");

/**
 * Covariance is the measure of the joint variability of two data sets.
 *
 * @param {number[]} x - First data set
 * @param {number[]} y - Second data set
 * @param {boolean} [isSample = true] - Optional parameter to specify whether the list is pre-sorted or not
 * @returns {number} - Covariance of the two data sets
 */
function covariance(x, y, isSample = true) {
  if (x.length !== y.length)
    throw new DataSetError("Data sets must have equal size.");
  else if (x.length < 2) throw new DataSetSizeError(2);

  const xbar = mean(x),
    ybar = mean(y),
    denom = x.length - (isSample ? 1 : 0);

  return x.reduce((cov, x, i) => cov + (x - xbar) * (y[i] - ybar), 0) / denom;
}

module.exports = covariance;
