const express = require("express");
const router = express.Router();

// raw test data

let blogs = [
  {
    id: 1,
    title: "First Blog Post",
    description: "This is the first blog post description",
  },
  {
    id: 2,
    title: "2nd Blog Post",
    description: "This is the 2nd blog post description",
  },
  {
    id: 3,
    title: "3rd Blog Post",
    description: "This is the 3rd blog post description",
  },
];

router.get("/", (req, res) => {
  res.send(blogs);
});

// get single blog
router.get("/:id", (req, res) => {
  const { id } = req.params;
  // find existing blog
  const existingBlog = blogs.find((blog) => blog.id === parseInt(id));

  if (!existingBlog) {
    // res.send("No blog found")
    res.status(404).json({ message: "No blog found" });
  }
  res.status(200).json(existingBlog);
});

//  add new blog
router.post("/add-post", (req, res) => {
  const { title, description } = req.body;

  const newBlog = { id: blogs.length + 1, title, description };
  blogs.push(newBlog);

  res.status(200).json({
    message: "New blog added successfully!",
    blog: newBlog,
  });
});

// update blog
router.put("/update-post/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, author } = req.body;

  const blog = blogs.find((blog) => blog.id === parseInt(id));
  if (!blog) return res.status(404).json({ message: "No blog found" });

  blog.title = title || blog.title;
  blog.description = description || blog.description;

  res.status(200).json({
    message: "Blog updated successfully!",
    blog,
  });
});

// delete a blog by id
router.delete("/delete-post/:id", (req, res) => {
  const { id } = req.params;

  const blogIndex = blogs.findIndex((blog) => blog.id === parseInt(id));
  if (blogIndex === -1)
    return res.send(400).json({ message: "Blog not found!" });

  blogs.splice(blogIndex, 1);
  res.status(200).json({ message: "Blog deleted successfully!" });
});

module.exports = router;
