require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./db/conn");
const port = process.env.PORT || 8000;

connection();

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})