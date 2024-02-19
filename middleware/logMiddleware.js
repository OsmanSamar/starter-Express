//In logMiddleware.js, create a middleware that performs the logging, using log.js module

import logger from "../utils/log.js";

// A middleware should be a method that takes req, res, and next as arguments.

const log = (req, res, next) => {
  //can store the current
  // Date() in a variable called start before calling next() and then calculate the difference
  //by using the Date () method again and subtracting it from ‘start’. The difference
  // will be in ms and you can store it in a variable called ms.
  const start = new Date();

  next();

  //You can use the info() method on the imported logger and pass a string that contains
  // the method, originalUrl, statusCode and ms.

  const ms = new Date() - start;
  logger.info(
    `${req.method} ${req.originalUrl}. Status: ${res.statusCode}. Duration: ${ms} ms`
  );
};

export default log;

//middleware functions in Express allow us to divide tasks, promote reusability,
//and make our application more efficient and powerful, just like workers in a well-organized factory assembly line.
//A middleware is a function that has access to the request and response object and is executed before the server responds to the client’s request.
