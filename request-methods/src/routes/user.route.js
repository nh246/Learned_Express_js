const express = require("express");
const router = express.Router();


router.get("/user/:id", (req, res) => {
    // console.log(req.params)
    const id = req.params.id;
    res.send(`this is user page is : ${id}`);
  });


module.exports = router;