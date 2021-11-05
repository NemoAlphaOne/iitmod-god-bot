class DataSetError extends Error {
  /**
   * A custom error type for when the input data is invalid.
   * @param {string} err
   */
  constructor(err) {
    super(err);
    this.name = "DataSetError";
  }
}

class DataSetSizeError extends DataSetError {
  /**
   * A custom error type for when the data set doesn't have required size
   * @param {number} size
   */
  constructor(size) {
    super(`Data set must contain at least ${size} data point(s).`);
    this.name = "DataSetSizeError";
    this.size = size;
  }
}

module.exports = { DataSetError, DataSetSizeError };
