const { productModel } = require('../models');
const schema = require('./validations/validationsInputValues');

const getAll = async () => {
  const list = await productModel.findAll();
  return { type: null, message: list };
};

const getProductById = async (id) => {
  const error = await schema.validateId(id);
  if (error.type) return error;

  const product = await productModel.findById(id);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  
  return { type: null, message: product };
};

const createProduct = async (name) => {
  const error = schema.validateName(name);
  if (error.type) return error;

  const newProduct = await productModel.insertProduct({ name });
  const newId = await productModel.findById(newProduct);

  return { type: null, message: newId };
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
};