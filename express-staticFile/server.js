const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

// middleware
app.use(express.static(path.join(process.cwd(), "public"))) 

app.get('/', (req, res) => {
    const pathURL = path.join(process.cwd(), "public", "index.html");
    res.sendFile(pathURL)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})