const express = require('express');
const bodyParser = require('body-parser');
const api = express();
const router = require('./routes');

api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
api.use('/', router);

module.exports = api;