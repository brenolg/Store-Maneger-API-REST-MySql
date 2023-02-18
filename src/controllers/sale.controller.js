const { saleService } = require('../services');

const createSale = async (req, res) => {
  try {
    const sales = req.body;

    const { type, message } = await saleService.createSale(sales);

    if (type) return res.status(type).json(message);
    
    res.status(201).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const { message } = await saleService.getAll();

    res.status(200).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const productById = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, message } = await saleService.getProductById(id);

    if (type) return res.status(404).json({ message });
    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSale,
  getAll,
  productById, 
};