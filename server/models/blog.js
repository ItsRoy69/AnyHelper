const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  
});



const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;