const { DataSetSizeError } = require("../utils/errors");

/**
 * The arithmetic mean of a data set is the sum of all data points over the
 * number of data points.
 *
 * @param {number[]} data - Input data set
 * @returns {number} - Mean of the data set
 * @example
 * mean([1, 2, 3, 4, 5]); // => 3
 */
function mean(data) {
  if (data.length < 1) throw new DataSetSizeError(1);
  return data.reduce((sum, n) => n + sum) / data.length;
}

module.exports = mean;
