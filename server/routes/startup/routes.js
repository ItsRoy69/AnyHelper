const express = require("express");
var indexRouter = require('../index');
var storeRouter = require('../store');
var workerRouter = require('../worker');
var customerRouter = require('../customer');
var spacesRouter = require('../spaces');

module.exports = function(app) {
    app.use(express.json());
  
    app.use("/", indexRouter);
    app.use("/stores", storeRouter);
    app.use('/workers', workerRouter);
    app.use('/customers', customerRouter);
    app.use('/chat',spacesRouter);
  };