const { DataSetSizeError } = require("../utils/errors");

/**
 * The median of a data set is the middle most data point of the set if the
 * length of the set is odd and average of the two middle data points if the
 * length is even.
 *
 * @param {number[]} data - Input data set
 * @param {boolean} [isSorted = false] - Optional parameter to specify whether the list is pre-sorted or not
 * @returns {number} - Median of the data set
 * @example
 * median([1, 2, 3]); // => 2
 * @example
 * median([1, 2, 3, 4]); // => 2.5
 */
function median(data, isSorted = false) {
  if (data.length < 2) throw new DataSetSizeError(2);

  const sorted = isSorted ? data : [...data].sort((a, b) => a - b),
    len = data.length;

  return len % 2 === 0
    ? (sorted[len / 2 - 1] + sorted[len / 2]) / 2
    : sorted([len - 1] / 2);
}

module.exports = median;
