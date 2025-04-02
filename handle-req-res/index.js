const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser')

app.use(cookieParser())

// const path = require("path");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/inspect", (req, res) => {
//   // console.log("This req method: ", req.method)
//   // console.log("This req method: ", req.url)
//   res.send("You are on inspect page");
// });

// app.get("/test", (req, res) => {
//   res.send("test Page!");
// });
// app.get("/json", (req, res) => {
//   res.json({ name: "nazmul hossain" });
// });
// app.get("/status", (req, res) => {
//   res.status(200).send("You are on status page");
// });
// app.get("/redirect", (req, res) => {
//   res.redirect("/test");
// });
// app.get("/api/user", (req, res) => {
//   const user = {
//     id: 10,
//     name: "nazmul hossain",
//     email: "4VY9t@example.com",
//   };

//   res.status(200).json({
//     success: true,
//     data: user,
//   });
// });

// app.get('/html', (req, res) => {
//     res.send(`<h1>This is html</h1> <p>This is paragraph</p>`)
// })

// app.get('/file' , (req, res) => {
//     const filePath = path.join(process.cwd() , 'public' , 'example.html')
//     res.sendFile(filePath)
// })


// setting header and cookies

app.get("/header" , (req , res) => {
    res.set('custom-header' , 'this is custom header')
    res.send('Hello World!')
})

// set cookies

app.get('/cookie' , (req , res) => {
   
    const token = "1414abcdefghijklmnopqrstuvwxyz"
    res.cookie('token', token ,{
        httpOnly: true,
        // expires: new Date(Date.now() + 60 * 1000),
        secure: true
    })

    res.send('cookies set')
})

app.get('/dashboard', (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.send('You are not logged in')
  }
  console.log(token)
  res.send('this is dashboard page')
});

app.get('/clear-cookie', (req, res) => {
  res.clearCookie('token')
  res.send('cookies cleared')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
