const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const app = express();

// init middleware
app.use(morgan("combined"));
app.use(helmet());
app.use(compression());

// init db

// init routes
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "OK",
  });
});

// handling errors

module.exports = app;
