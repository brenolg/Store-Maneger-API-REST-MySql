const { saleModel } = require('../models');

const createSale = async (sales) => {
  const date = new Date();
  const newId = await saleModel.insertSale(date);
  await Promise.all(sales.map((sale) => saleModel.insertSaleProduct(newId, sale)));

  const newMessage = { id: newId, itemsSold: sales }; 
  
  return { type: null, message: newMessage };
};

const getAll = async () => {
  const list = await saleModel.findAll();
  
  return { type: null, message: list };
};

const getProductById = async (id) => {
  const sale = await saleModel.findById(id);
  if (!sale.length) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  
  return { type: null, message: sale };
};

module.exports = {
  createSale,
  getAll,
  getProductById,
};