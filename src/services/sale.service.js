const { saleModel } = require('../models');

const createSale = async (sales) => {
  const date = new Date();
  const newId = await saleModel.insertSale(date);
  const soldItems = await Promise.all(sales.map((sale) => {
    saleModel.insertSaleProduct(newId, sale); 
    return sale;
  }));
  
 const newMessage = { id: newId, itemsSold: soldItems }; 
  
  return { type: null, message: newMessage };
};

module.exports = {
  createSale,
};