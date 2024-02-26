import express from "express";
import * as Sentry from "@sentry/node";
import "dotenv/config";

import booksRouter from "./routes/books.js";
import recordsRouter from "./routes/records.js";
import categoriesRouter from "./routes/categories.js";
import eventsRouter from "./routes/events.js";
import usersRouter from "./routes/users.js";

import loginRouter from "./routes/login.js";
import log from "./middleware/logMiddleware.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

Sentry.init({
  dsn: "https://5621e310007108c5059724d09bff1780@o4506603413307392.ingest.sentry.io/4506603427856384",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    // Automatically instrument Node.js libraries and frameworks
    ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context, so that all
// transactions/spans/breadcrumbs are isolated across requests
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// Global middleware
app.use(express.json());
app.use(log);

// Resource routes
app.use("/books", booksRouter);
app.use("/records", recordsRouter);
app.use("/categories", categoriesRouter);
app.use("/events", eventsRouter);
app.use("/users", usersRouter);

// Login
app.use("/login", loginRouter);

// Trace errors
// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Error handling
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World! Completed. Hi");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
