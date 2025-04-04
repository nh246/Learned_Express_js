const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const upload = require("./src/utils/multer.js");
const cloudinary = require("./src/utils/clodinaryConfig.js");
const fs = require("fs");

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload", upload.single("image"), async (req, res) => {
    if(!req.file) return res.status(400).json({error: "No file found"})
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "uploads",
    });

    // delete file from local storage after upload
    fs.unlinkSync(req.file.path);

    res
      .status(201)
      .json({
        message: "File Uploaded Successfully!",
        imageURL: result.secure_url,
      });
  } catch (error) {
    res.status(500).json({ error: "Upload failed", error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
