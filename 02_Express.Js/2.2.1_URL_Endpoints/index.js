import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/contact", (req, res) => {
  res.send(
    "<h1>Contact Page</h1><p>Email: aniket@gmail.com<br/>Phone: +91 1234567890</p>"
  );
});

app.get("/about", (req, res) => {
  res.send("<h1>About Us Page</h1><p>Myself Aniket... </p>");
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
