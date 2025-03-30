const express = require('express')
const activityLogger = require('./src/middleware/logger')
const myMiddleware = require('./src/middleware/mymiddleware')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(express.static('src/public'))


// third party middleware
app.use(morgan('combined'))
app.use(cors({
    origin: ['http://localhost:3000/'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

// global middleware
app.use(activityLogger)

app.get('/', (req, res) => {
  res.send('Welcome to middleware concepts')
})

// post new blog routes
app.post('/new-blog', (req, res) => {
    console.log(req.body);
    res.send('Blog created successfully!')
})



app.get('/about', (req, res) => {
    res.send('About page!')
  })
  


app.get("/products", myMiddleware ,(req, res) => {
    res.send("Product Page is here")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})