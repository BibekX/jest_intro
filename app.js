const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  let data = req.body;
  console.log("data", data);
  res.status(201).json({
    username: "sam",
    password: 123,
  });
});

module.exports = app;
