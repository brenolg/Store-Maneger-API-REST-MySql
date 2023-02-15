// const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result; 
};

const findById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ? ', [id],
  );
  
  return result; 
};

const insertProduct = async (passenger) => {
  const columns = Object.keys(snakeize(passenger)).join(', ');

  const placeholders = Object.keys(passenger)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.products (${columns}) VALUE (${placeholders})`,
    [...Object.values(passenger)],
  );

  return insertId;
};

module.exports = {
  findAll,
  findById,
  insertProduct,
};