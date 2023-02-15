const express = require('express');
const { productController } = require('../controllers');

const router = express.Router();

router.get('/', productController.listProducts);

router.get('/:id', productController.productById);

router.post('/', productController.createProduct);

module.exports = router;