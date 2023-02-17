const connection = require('./connection');

const insertSale = async (date) => { 
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)', [date],
  );
  return insertId;
};

const insertSaleProduct = async (insertId, sale) => {
    connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [insertId, sale.productId, sale.quantity],
    );
};

module.exports = {
  insertSale,
  insertSaleProduct,

};