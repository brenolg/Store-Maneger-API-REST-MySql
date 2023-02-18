const express = require('express');
const { saleController } = require('../controllers');
const { idRequired, quantityRequired, quantityCheck,
  validId, validProduct } = require('../middlewares/sale.middlewares');

const router = express.Router();

router.post('/', idRequired, quantityRequired, quantityCheck, validId, validProduct,
  saleController.createSale);

module.exports = router;