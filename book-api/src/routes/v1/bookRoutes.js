const express = require('express')
const router = express.Router()

// local database
let books = [
    {id: 1, title: "The Great Gatsby", author: "F. Scott Frtzgerald"},

]

// get all books v1
router.get('/', (req, res) => {
    res.json({version: "v1", books})
})



module.exports = router