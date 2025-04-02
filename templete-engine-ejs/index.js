const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

// set EJS as the template engine
app.set('view engine', 'ejs');


// set views directory (folder containing)
app.set('views', path.join(process.cwd(), 'views'))

app.get('/', (req, res) => {
    res.render("index", {title: "Home Page", message: "Welcome to to EJS"})
  })




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
