const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
  // res.send('Hello World!');
  res
  .status(200)
  .json({
    hello: 'World!'
  });
});

module.exports = router