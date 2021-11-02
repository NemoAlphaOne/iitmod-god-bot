const { InvalidDataError } = require("../utils/errors");
const mean = require("./mean");

/**
 * The variance is a measure of dispersion, i.e. a measure of how far a set of
 * data points are spread out from their average value.
 *
 * @param {number[]} data - Input data set
 * @param {boolean} [isSample = true] - Optional parameter to specify the type of data set
 * @returns {number} - Variance of the data set
 * @example
 * variance([1, 2, 3, 4, 5]); // => 2.5 (variance of a sample data set)
 * @example
 * variance([1, 2, 3, 4, 5], false); // => 2 (variance of a population data set)
 */
function variance(data, isSample = true) {
  if (data.length < 2)
    throw new InvalidDataError("Data set must contain at least 2 data points.");

  const xbar = mean(data),
    denom = data.length - (isSample ? 1 : 0);

  return data.reduce((sse, x) => sse + Math.pow(x - xbar, 2), 0) / denom;
}

module.exports = variance;
