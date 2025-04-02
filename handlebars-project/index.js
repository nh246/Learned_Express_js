const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000;

// configuration
app.engine('hbs', exphbs.engine({extname: 'hbs', defaultLayout: false}))
app.set('view engine', 'hbs')
app.set('views', './views')


app.get('/', (req, res) => {
  const userData = {
    name: "Namzul",
    email: "nazmul@gmail.com",
    age: 23,
    isAdmin: false,
    hobbies: ["coding", 'sleep', 'reading']
  }
  res.render('profile', userData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})