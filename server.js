"use strict";
const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
  return res.render("index");
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});