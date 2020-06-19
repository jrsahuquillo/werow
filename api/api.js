const express = require('express');
const bodyParser = require('body-parser');
const api = express();
const router = require('./routes');

api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

api.use('/', router);

module.exports = api;