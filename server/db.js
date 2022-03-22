//This is a demo db , the original files are safe

const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://milanserver:123456roy@cluster0.sfh23.mongodb.net/milan?retryWrites=true&w=majority";
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("CONNECTED TO MONGO DB DATABASE 🌐");
  });
};

module.exports = connectToMongo;
