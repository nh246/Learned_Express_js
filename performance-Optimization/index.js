const express = require("express");
const NodeCache = require("node-cache");
const app = express();
const  compression = require('compression')
const port = process.env.PORT || 3000;

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });
app.use(compression())

// middleware

const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl;
  const cachedData = cache.get(key);

  if (cachedData) {
    console.log(cachedData);
    return res.json(cachedData);
  }

  console.log("first time request so no cache");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", cacheMiddleware, (req, res) => {

    const userdata = {
        name: "nazmul hossain",
        email: "nazmul@gmail"
    }
  cache.set(req.originalUrl, userdata);

  res.json( userdata);
});


// large data

app.get("/large-data", (req, res) => {

    const myData = "This is a large data"
  const largeData = { message: myData.repeat(1000) };
  res.json(largeData);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
