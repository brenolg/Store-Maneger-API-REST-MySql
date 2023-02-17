const express = require('express');
const { saleController } = require('../controllers');

const router = express.Router();

router.post('/', saleController.createSale);

module.exports = router;