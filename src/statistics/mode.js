const { InvalidDataError } = require("../utils/errors");

/**
 * The mode of a data set is the data point that appears the most number of
 * times. There can be multiple modes in a data set. This algorithm will return
 * a list of all such modes.
 *
 * @param {number[]} data - Input data set
 * @param {boolean} [isSorted = false] - Optional parameter to specify whether the list is pre-sorted or not
 * @returns {number[]} - List of all modes of the data set
 * @example
 * mode([10, 20, 1, 2, 2, 10]); // => [2, 10]
 * @example
 * mode([1, 1, 1, 2]); // => [1]
 */
function mode(data, isSorted = false) {
  if (data.length < 2)
    throw new InvalidDataError("Data set must contain at least 2 data points.");

  const sorted = isSorted ? data : [...data].sort((a, b) => a - b);
  let currentItem = sorted[0],
    currentStreak = 1,
    bestStreak = 1,
    modes = [];

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === currentItem) {
      currentStreak++;
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        modes = [sorted[i]];
      } else if (currentStreak === bestStreak) {
        modes.push(sorted[i]);
      }
    } else {
      currentItem = sorted[i];
      currentStreak = 1;
    }
  }

  return modes;
}

module.exports = mode;
