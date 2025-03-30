const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hellow nazmul hossain");
});

// get request

app.get("/about", (req, res) => {
  res.send("this is about page");
});

// post request

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("this is contact page");
});

// routes for put and patch
const blogRoutes = require("./src/routes/post.route.js")

app.use('/blogs',blogRoutes)



// delete request

app.delete("/delete/:id", (req, res) => {
  console.log(req.params);
  res.send("this is delete page");
});

// route parameters

const user = require('./src/routes/user.route.js')

app.use('/user',user)

// search parameters

app.get("/search", (req, res) => {

    const {category, value} = req.query
  console.log(category, value);
  res.send(`this is search page is : ${category} ${value}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
