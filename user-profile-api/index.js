const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");
const path = require("path");

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// get user profile
app.get("/api/profile", (req, res) => {
  const user = [
    {
      id: 1,
      name: "Mamun",
      email: "nazmul@example.com",
      phone: "01712345678",
    },
    {
      id: 2,
      name: "Rahim",
      email: "rahim@example.com",
      phone: "01812345679",
    },
    {
      id: 3,
      name: "Shamim",
      email: "shamim@example.com",
      phone: "01912345670",
    },
  ];
  res.status(200).json(user);
});

// set cookies

app.get("/custom-cookie", (req, res) => {
  res.cookie("custom_cookie", "123xyx55", {
    maxAge: 60000,
    httpOnly: true,
    secure: true,
  });

  res.send("cookies set");
});

// get cookies
app.get("/get-custom-cookie", (req, res) => {
  const cookie = req.cookies.custom_cookie;
  console.log(cookie);
  res.send(`Your custom cookie is: ${cookie}`);
});

app.get("/delete-custom-cookie", (req, res) => {
  res.clearCookie("custom_cookie");
  res.send(`Cookie deleted successfully!`);
});

// profile html page
app.get("/profile", (req, res) => {
//   const cookie = req.cookies.customCookie;
//   if(!cookie) {
//      return res.status(401).json({message: "Authorized access!"})
//   }
  const filePath = path.join(process.cwd(), "public", "profile.html");

  res.sendFile(filePath);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
