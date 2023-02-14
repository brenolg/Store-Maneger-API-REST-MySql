const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const XXX = async () => {
  const [result] = await connection.execute(
    snakeize(),
  );
  return camelize(result); 
};

module.exports = {
XXX,
};