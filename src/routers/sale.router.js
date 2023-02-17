const express = require('express');
const { saleController } = require('../controllers');
const { validateId, validateQuantity } = require('../middlewares/sale.middlewares');

const router = express.Router();

router.post('/', saleController.createSale);

module.exports = router;