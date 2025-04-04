const express = require('express')
const errorHandler = require('./middleware/errorHandeler')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const error = new Error("Home route error");
  next(error);
})

//call middleware 

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})