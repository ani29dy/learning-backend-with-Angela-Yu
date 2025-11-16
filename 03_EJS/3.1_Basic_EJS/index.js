import express from "express";

const app = express();
const port = 3000;

const today = new Date();
const day = today.getDay();

app.get("/", (req, res) => {
  let type = "a weekday";
  let adv = "its time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "its time to have some fun";
  }
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
