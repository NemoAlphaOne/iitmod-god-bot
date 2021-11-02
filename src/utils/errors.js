class InvalidDataError extends Error {
  /**
   * A custom error type for when the input data is invalid.
   * @param {string} err
   */
  constructor(err) {
    super(err);
    this.name = "InvalidDataError";
  }
}

module.exports = { InvalidDataError };
