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
const { addUser, getUser } = require("./middleware/spaceUsers");


connection();



const server = http.createServer(app);
const io = socketio(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("We have a new connection!!!");

  socket.on("join", ({ username, selectedSpace }, callback) => {
    const spacename = selectedSpace.spaceName;
    console.log(spacename);
    const { error, user } = addUser({ id: socket.id, username, spacename });
    if (error) {
      console.log(error);
      return callback({ error: "error" });
    }
    console.log(user);
    // console.log("Random");
    // socket.emit("message", {
    //   username: "admin",
    //   message: `${user.username} welcome to the space ${user.spacename}`,
    //   spacename: `${user.spacename}`,
    // });

    socket.broadcast.to(user.spacename).emit("message", {
      username: "admin",
      message: `${user.username} has joined!`,
    });

    socket.join(user.spacename);

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    console.log(user);
    io.to(user.spacename).emit("message", {
      username: user.username,
      message: message,
      spacename: user.spacename,
    });

    callback();
  });

  socket.on("disconnect", () => {
    console.log("User had left");
  });
});


server.listen(port, () => {
  console.log(`Listening to port ${port}`);
});