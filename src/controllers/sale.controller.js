const { saleService } = require('../services');

const createSale = async (req, res) => {
  const sales = req.body;
  console.log(sales);

  const newSales = await saleService.createSale(sales);
  // if (type) return res.status(type).json(message);
  
  res.status(201).json(newSales);
};

module.exports = {
  createSale,
};