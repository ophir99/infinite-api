const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());
app.use(express.json());
let data = [];

axios.get("https://jsonplaceholder.typicode.com/todos/").then(function(res) {
  data = res.data;
});

app.get("/posts", function(req, res) {
  const { start, end } = req.query;
  console.log(start, end);
  const temp = data.slice(start, end);
  res.send(temp);
});

app.listen(8080);
