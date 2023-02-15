const express = require('express');
const { productController } = require('../controllers');
const { validateName } = require('../middlewares/product.middlewares');

const router = express.Router();

router.get('/', productController.listProducts);

router.get('/:id', productController.productById);

router.post('/', validateName, productController.createProduct);

module.exports = router;