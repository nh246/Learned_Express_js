const express = require("express");
const CustomError = require("./src/utils/customError");
const errorHandler = require("./src/middleware/errorHandler");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// not found routes
app.get("/notfound", (req, res, next) => {
  next(new CustomError("Not Found Error", 404));
});

app.get("/unauthorized", (req, res, next) => {
  next(new CustomError("Unauthorized Access", 401));
});

// for normal error handling
app.get("/normal-error", (req, res, next) => {
  next(new Error("This is a normal error, just ignore it!"));
});

// call error handler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
