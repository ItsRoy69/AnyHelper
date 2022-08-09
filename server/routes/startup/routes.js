const express = require("express");
var indexRouter = require('../index');
var storeRouter = require('../store');

module.exports = function(app) {
    app.use(express.json());
  
    app.use("/", indexRouter);
    app.use("/stores", storeRouter);
    
  };