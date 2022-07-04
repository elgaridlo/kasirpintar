const AppError = require("./appError");

const handleTokenExpired = () =>
  new AppError('Token Expired, tolong login kembali !', 401);

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    let error = { ...err, name: err.name, message: err.message };

    if (error.name === 'TokenExpiredError') {
        error = handleTokenExpired();
      }

    res.status(error.statusCode).json({
        status: error.status,
        message: error.message
      });
  };