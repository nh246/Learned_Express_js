const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fs = require('fs')
const CustomError = require('./src/middleware/customError')
const errorHandler = require('./src/middleware/errorHandle')

app.get("/", (req, res, next) => {
    const error = new Error("Home route error");
    next(error);
})

// not found route
app.get("/notfound", (req, res, next) =>{
    // const error = new Error("Not found page");
    // next(error)

    next(new CustomError("Resource not found!", 404))
})

// unauthorized route
app.get("/unauthorized", (req, res, next) => {
    next(new CustomError("Unauthorized access!", 401))
})


app.get("/about", (req, res, next) => {
    fs.readFile('/xyz.txt', (err, data) => {
            if(err) next(err);
            res.send(data.toString())
    })
})

app.get("/products", (req, res, next) => {
    try {
        res.send("Product Page")
    } catch (error) {
        next(error)
    }
})

// global middleware
app.use(errorHandler)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})