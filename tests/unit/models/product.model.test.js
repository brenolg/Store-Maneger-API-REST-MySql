const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');

const { allProducts, newProduct, updated , deleted} = require('./mocks/product.model.mock');

describe('Testes da camada model de products', function () {

  it('Recuperando lista de products', async function () {
   
    sinon.stub(connection, 'execute').resolves([ allProducts]);
   
    const result = await productModel.findAll();
   
    expect(result).to.be.deep.equal(allProducts);
  });

  it('Recuperando product por id', async function () {
   
   sinon.stub(connection, 'execute').resolves([allProducts]);
  
   const result = await productModel.findById(1);
  
   expect(result).to.be.deep.equal(allProducts[0]);
  });

  it('Inserindo novo produto', async function () {
   
    sinon.stub(connection, 'execute').resolves([{insertId: 5}]);
  
    const result = await productModel.insertProduct(newProduct);
  
   expect(result).to.equal(5);
  });

  it('Modificando por id do produto', async function () {
    const id = 1
    const name = { "name": "Martelo do Birkman"}
   
    sinon.stub(connection, 'execute').resolves([updated]);
  
    const result = await productModel.setById(id, name);
  
    expect(result[0].affectedRows).to.be.deep.equal(1);
    expect(result[0].changedRows).to.be.deep.equal(1);
  });

  it('Modificando por id do produto', async function () {
    const id = 1
    const name = { "name": "Martelo do Birkman"}
    
    sinon.stub(connection, 'execute').resolves([updated]);

    const result = await productModel.setById(id, name);

    expect(result[0].affectedRows).to.be.deep.equal(1);
    expect(result[0].changedRows).to.be.deep.equal(1);
  });

  it('Deleta por id do produto', async function () {
        
    sinon.stub(connection, 'execute').resolves([deleted]);

    const result = await productModel.deleteById(1);

    expect(result[0].affectedRows).to.be.deep.equal(1);
    expect(result[0].serverStatus).to.be.deep.equal(2);
  });
  // serverStatus ??? o q seria

  afterEach(function () {
    sinon.restore();
  });
});