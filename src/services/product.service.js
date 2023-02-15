const { productModel } = require('../models');
const schema = require('./validations/validationsInputValues');

const getAll = async () => {
  const list = await productModel.findAll();
  return { type: null, message: list };
};

const getProductById = async (id) => {
  const error = await schema.validateId(id);
  if (error.type) return error;

  const product = await productModel.findProductById(id);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  
  return { type: null, message: product };
};

module.exports = {
  getAll,
  getProductById,
};