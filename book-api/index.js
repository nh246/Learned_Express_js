const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 3000

// middleware
app.use(express.json())
app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))


// routes
const bookRoutes = require('./src/routes/bookRoutes.js')
// books routes v1
const bookRoutesV1 = require('./src/routes/v1/bookRoutes.js')
app.use('/books', bookRoutes)
app.use("/api/v1/books", bookRoutesV1)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})