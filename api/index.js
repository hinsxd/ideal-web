const express = require('express');
const router = express.Router();
router
  .get('/orders', (req, res) => {
    res.send('orders');
  })
  .get('/users', (req, res) => {
    res.send('users');
  });
module.exports = router;
