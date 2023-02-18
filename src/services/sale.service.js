const { saleModel } = require('../models');

const createSale = async (sales) => {
  const date = new Date();
  const newId = await saleModel.insertSale(date);
  await Promise.all(sales.map((sale) => saleModel.insertSaleProduct(newId, sale)));

  const newMessage = { id: newId, itemsSold: sales }; 
  
  return { type: null, message: newMessage };
};

module.exports = {
  createSale,
};