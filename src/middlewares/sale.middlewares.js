const idRequired = (req, res, next) => {
  const sales = req.body;

  const hasId = sales.every((sale) => sale.productId);
  if (!hasId) return res.status(400).json({ message: '"productId" is required' });

  return next();
};

const quantityRequired = (req, res, next) => {
  const sales = req.body;

  const hasQuant = sales.every((sale) => sale.productId);
  if (!hasQuant) return res.status(400).json({ message: '"quantity" is required' });

  return next();
};

const quantityCheck = (req, res, next) => {
  const sales = req.body;

  const hasQuant = sales.some((sale) => sale.quantity < 1);
  if (!hasQuant) {
 return res.status(400)
    .json({ message: '"quantity" must be greater than or equal to 1' }); 
  }

  return next();
};

const validId = (req, res, next) => {
  const sales = req.body;

  const hasValidId = sales.every((sale) => sale !== undefined && sale !== null);
  if (!hasValidId) {
 return res.status(400)
    .json({ message: 'Product not found' }); 
  }

  return next();
};

const validateId = () => {
  idRequired();
  validId();
};

const validateQuantity = () => {
  quantityRequired();
  quantityCheck();
};

module.exports = {
  validateId,
  validateQuantity,
 
};
