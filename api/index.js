const express = require('express');

const router = express.Router();

const data = {
  a: 'b',
  c: 'd',
};

router.route('/').get((req, res, next) => {
  res.json(data);
});

module.exports = router;
