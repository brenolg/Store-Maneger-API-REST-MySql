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

const findById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT date, product_id,  FROM StoreManager.products WHERE id = ? ', [id],
  );
  
  return result; 
};

module.exports = {
  insertSale,
  insertSaleProduct,
  findById,
};