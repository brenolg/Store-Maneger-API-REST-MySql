const camelize = require('camelize');
const connection = require('./connection');

const insertSale = async (date) => { 
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)', [date],
  );
  return insertId;
};

const insertSaleProduct = async (insertId, sale) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [insertId, sale.productId, sale.quantity],
  );
};

const findAll = async () => {
  const [sales] = await connection.execute(
  `SELECT S.id AS 'saleId', S.date, SP.product_id AS 'productId', SP.quantity
  FROM StoreManager.sales AS S INNER JOIN StoreManager.sales_products AS SP
  ON S.id = SP.sale_id
  ORDER BY  S.id ASC, SP.product_id ASC`,
 
  );
  
  return camelize(sales); 
};

const findById = async (id) => {
  const [sales] = await connection.execute(
  `SELECT S.id AS 'productId', S.date, SP.product_id, SP.quantity As 'quantity'
  FROM StoreManager.sales AS S INNER JOIN StoreManager.sales_products AS SP
  ON S.id = SP.sale_id
  WHERE id = ? 
  ORDER BY  S.id ASC, SP.product_id ASC`, [id],
  );
  
  return camelize(sales); 
};

const validId = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ? ', [id],
  );
  
  return camelize(result); 
};

const deleteById = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ? ', [id],
  );
  return result; 
};

module.exports = {
  insertSale,
  insertSaleProduct,
  findAll,
  findById,
  deleteById,
  validId,
};