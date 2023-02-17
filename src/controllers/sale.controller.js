const { saleService } = require('../services');

const createSale = async (req, res) => {
  const sales = req.body;

  const { type, message } = await saleService.createSale(sales);

  if (type) return res.status(type).json(message);
  
  res.status(201).json(message);
};

module.exports = {
  createSale,
};