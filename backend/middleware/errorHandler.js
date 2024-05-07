const { HttpStatus } = require("../utils/statusCodes");
const { AppError } = require("../utils/error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ success: false, error: err.message });
  }
  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    error: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
