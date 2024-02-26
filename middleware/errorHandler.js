const errorHandler = (err, req, res, next) => {
  // TODO: Implement error handling middleware

  console.error(err);
  res.status(500).json({
    error: "Internal Server Error",
    message: "Something went wrong on the server!",
  });
};

export default errorHandler;
