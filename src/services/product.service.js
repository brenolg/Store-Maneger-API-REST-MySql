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

const updateById = async (id, name) => {
  const product = await productModel.findById(id);

  if (!product) return { type: 404, message: 'Product not found' };

  await productModel.setById(id, name);

  const newMessage = { id, name };

  return { type: null, message: newMessage };
};

const deleteById = async (id) => {
  const hasId = await productModel.findById(id);

  if (!hasId) return { type: 404, message: 'Product not found' };

  console.log(hasId);

  await productModel.deleteById(id);

  return { type: null, message: '' };
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  updateById,
  deleteById,
};