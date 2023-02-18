const { productModel } = require('../models/index');

const idRequired = (req, res, next) => {
  const sales = req.body;

  const hasId = sales.every((sale) => sale.productId !== undefined && sale.productId !== null);
  if (!hasId) return res.status(400).json({ message: '"productId" is required' });

  return next();
};

const quantityRequired = (req, res, next) => {
  const sales = req.body;

  const hasQuant = sales.every((sale) => sale.quantity !== undefined && sale.quantity !== null);
  if (!hasQuant) return res.status(400).json({ message: '"quantity" is required' });

  return next();
};

const quantityCheck = (req, res, next) => {
  const sales = req.body;

  const hasQuant = sales.some((sale) => sale.quantity < 1);
  if (hasQuant) {
    return res.status(422)
    .json({ message: '"quantity" must be greater than or equal to 1' }); 
  }

  return next();
};

const validId = (req, res, next) => {
  const sales = req.body;

  const hasValidId = sales.every((sale) => sale.productId !== undefined && sale.productId !== null);
  if (!hasValidId) {
 return res.status(400)
    .json({ message: 'Product not found' }); 
  }

  return next();
};

const validProduct = async (req, res, next) => {
  const products = req.body;

  const allProducts = await Promise.all(products.map(async ({ productId }) => {
    const findProduct = await productModel.findById(productId);
    return findProduct;
  })); 

  const validPId = allProducts.every((product) => product !== undefined && product !== null);

  if (!validPId) return res.status(404).json({ message: 'Product not found' });

  return next();
};

module.exports = {
  idRequired,
  quantityRequired,
  quantityCheck,
  validId,
  validProduct, 
};
