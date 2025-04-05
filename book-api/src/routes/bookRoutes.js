const express = require('express')
const router = express.Router()



// local database
let books = [
    {id: 1, title: "The Great Gatsby", author: "F. Scott Frtzgerald"},
    {id: 2, title: "1984", author: "George Orwell"},
    {id: 3, title: "To Kill a Mockingbird", author: "Harper Lee"}
]

// get all books
router.get('/', (req, res) => {
        res.status(200).json(books)
    })

// add new books
router.post('/', (req, res) => {
    // const {title, author} = req.body;
    // const newBook =  {id: books.length + 1, title: title, author: author};
    const newBook = {id: books.length + 1, ...req.body}
    books.push(newBook);
    res.status(201).json(newBook);
})  

// update a book
router.put("/:id", (req, res) => {
    const {id} = req.params;
    
    const findBookIndex = books.findIndex(book => book.id === parseInt(id));
    if(findBookIndex !== -1) {
        books[findBookIndex] = {...books[findBookIndex], ...req.body};
        res.status(200).json(books[findBookIndex])
    } else {
       res.status(404).json({message: 'Book not found'}) 
    }
 
})

// delete a book
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    books = books.filter(book => book.id !== parseInt(id));
    res.json({message: "Book deleted successfully!"})
    
})





module.exports = router