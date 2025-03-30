const express = require("express");
const router = express.Router();

// put request

router.put("/update/:id", (req, res) => {
  res.send("this is update page");
});

// patch request
router.patch("/update/:id", (req, res) => {
  res.send("this is update page");
});

module.exports = router;
