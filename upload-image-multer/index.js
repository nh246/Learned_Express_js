const express = require('express')
const app = express()
const multer  = require('multer');
const path = require('path');
const fs = require("fs")
const port = 3000

// multer file storage
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        // unique filename
        cb(null, Date.now() +  path.extname(file.originalname))
    }
})

const upload = multer({ storage, limits: {
    fileSize: 2 * 1024 * 1024
}})

// middleware
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html")
})

app.post("/upload", upload.single('image'),(req, res) => {
    if(!req.file) return res.status(400).json({error: 'File not found'})
    
    res.status(200).json({
        message: "File uploaded successfully",
        file: req.file.filename
    })
})

app.delete("/delete/:filename", (req, res) => {
  const filePath = path.join(process.cwd(), "uploads", req.params.filename );

  fs.unlink(filePath, (err) => {
    if(err) return res.status(500).json({error: "File Deletion Failed!"});
    res.status(200).json({message: "File deleted successfully!"});
  })

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})