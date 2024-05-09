const HttpStatus = require("../utils/statusCodes");

class AppError extends Error {
  constructor({ name, message }) {
    const statusCodes = HttpStatus[name];
    // console.log(name);
    // console.log("We are in apperror");
    // console.log(statusCodes);
    super(message);

    this.statusCodes = statusCodes;
    this.message = message;
  }
}

module.exports = AppError;
