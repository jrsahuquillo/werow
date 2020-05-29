"use strict";

var express = require('express');

var router = express.Router();
router.get('/api', function (req, res) {
  // res.send('Hello World!');
  res.status(200).json({
    hello: 'World!'
  });
});
module.exports = router;