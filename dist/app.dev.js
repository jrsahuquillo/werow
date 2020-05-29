"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var router = require('./routes');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/', router);
module.exports = app;