const { productService } = require('../services');

const listProducts = async (_req, res) => {
  const { type, message } = await productService.getAll();

  if (type) return res.status(type).json(message);
  
  res.status(200).json(message);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getProductById(id);

  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  listProducts,
  productById,
};