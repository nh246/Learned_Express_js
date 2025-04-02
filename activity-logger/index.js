const express = require('express')
const activityLogger = require('./src/middleware/logger')
const app = express()

const port = process.env.PORT || 3000

app.use(activityLogger)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
    res.send('Contact Page!')
  
})

app.get('/about', (req, res) => {
    res.send('About Page!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})