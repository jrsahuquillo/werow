"use strict";

var express = require('express');

var router = express.Router();
router.get('/api', function (req, res) {
  // res.send('Hello World!');
  res.json({
    hello: 'World!'
  });
});
module.exports = router;