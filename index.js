const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from server side sagar watch");
});

app.listen(port, () => {
  console.log("Your app listening or port ", port);
});
