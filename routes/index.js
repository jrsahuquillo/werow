const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
  // res.send('Hello World!');
  res.json({
    hello: 'World!'
  });
});

module.exports = router