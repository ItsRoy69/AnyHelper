const express = require("express");
const router = express.Router();
require('./db/conn.js');


router.get("/", (req, res) => {
  res.json({ message: "This is the api lol" });
});
