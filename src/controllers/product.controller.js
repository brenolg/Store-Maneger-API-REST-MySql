const { productService } = require('../services');

const listProducts = async (_req, res) => {
  const { type, message } = await productService.getAll();

  if (type) return res.status(type).json({ message });
  
  res.status(200).json(message);
};

const productById = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, message } = await productService.getProductById(id);

    if (type) return res.status(404).json({ message });
    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await productService.createProduct(name);

  if (type) return res.status(400).json({ message });
  return res.status(201).json(message);
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const { type, message } = await productService.updateById(id, name);

    if (type) return res.status(type).json({ message });
    
    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  listProducts,
  productById,
  createProduct,
  updateById, 
};