const express = require('express');
const { xxx } = require('../controllers');

const router = express.Router();

router.get(
  '/',
  xxx(),
);

module.exports = router;