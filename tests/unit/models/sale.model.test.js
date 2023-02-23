const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { saleModel } = require('../../../src/models');

const { allSales, newSaleP } = require('./mocks/sale.model.mock');

describe('Testes da camada model de sales', function () {

  it('Recuperando lista de sales', async function () {
   
    sinon.stub(connection, 'execute').resolves([allSales]);
   
    const result = await saleModel.findAll();
   
    expect(result).to.be.deep.equal(allSales);
  });

  it('Recuperando sale por id', async function () {
  
  sinon.stub(connection, 'execute').resolves([allSales[1]]);
  
  const result = await saleModel.findById(1);
  
  expect(result).to.be.deep.equal(allSales[1]);
  });
  
  it('Inserindo nova sales', async function () {
    const date = new Date()
    const id = 7

    sinon.stub(connection, 'execute').resolves([{ id }]);
  
    const result = await saleModel.insertSale(date);
 
    console.log(result);
    expect(result).to.be.deep.equal(result);
  });

  it('Inserindo nova sales_oroducts', async function () {
 
  sinon.stub(connection, 'execute').resolves(newSaleP);

  const result = await saleModel.insertSaleProduct(1, newSaleP);

  console.log(result);
    expect(result).to.be.deep.equal(result);
    // ???conferir
  });
  
  afterEach(function () {
    sinon.restore();
  });
});