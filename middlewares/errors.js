import ErrorHandler from "../utils/errorHandler";

export default (err, req, res, next) => {
  let error = err;
  error.statusCode = error.statusCode || 500;

  // Wrong Mongoose Object ID Error
  if (error.name === "CastError") {
    const message = `Resource not found. Invalid: ${error.path}`;
    error = new ErrorHandler(message, 400);
  }

  // Handling mongoose Validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((value) => value.message)
      .join(", ");
    error = new ErrorHandler(message, 400);
  }

  // Duplicate key error (e.g. an email address already registered)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0] || "field";
    const message = `That ${field} is already in use. Please use another.`;
    error = new ErrorHandler(message, 400);
  }

  const isDev = process.env.NODE_ENV === "development";

  res.status(error.statusCode).json({
    success: false,
    message: error.message || "Something went wrong on our end.",
    ...(isDev && { stack: err.stack }),
  });
};
