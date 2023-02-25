const express = require('express');
const { saleController } = require('../controllers');
const { idRequired, quantityRequired, quantityCheck,
  validId, validProduct } = require('../middlewares/sale.middlewares');

const router = express.Router();

router.post('/', idRequired, quantityRequired, quantityCheck, validId, validProduct,
saleController.createSale);

router.get('/', saleController.getAll);

router.get('/:id', saleController.productById);

router.delete('/:id', saleController.deleteById);

module.exports = router;