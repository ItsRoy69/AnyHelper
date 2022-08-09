require("dotenv").config();
const socketio = require("socket.io");
const http = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("./db/conn");
app.use(cookieParser());
const connection = require("./db/conn");
app.use(express.urlencoded({ extended: false }));
require("./routes/startup/routes")(app);
const port = process.env.PORT || 8000;


connection();



app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})