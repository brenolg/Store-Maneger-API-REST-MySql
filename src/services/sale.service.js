const { saleModel } = require('../models');

const createSale = async (sales) => {
  const date = new Date();
  const id = await saleModel.insertSale(date);
  const soldItems = await Promise.all(sales.map((sale) => {
    saleModel.insertSaleProduct(id, sale); 
    return sale;
}));

  return { id, soldItems };
};

module.exports = {
  createSale,
};