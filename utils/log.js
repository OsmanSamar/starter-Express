import winston from "winston";
//Here we will use a 3rd party logger package Winston(opens in a new tab).
//Winston is a logging library that helps you save and manage log messages in your application
// link to https://www.npmjs.com/package/winston

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "bookstore-api" },
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

export default logger;
