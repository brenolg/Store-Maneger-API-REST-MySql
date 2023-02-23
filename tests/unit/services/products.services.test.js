const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { productService } = require('../../../src/services');

const { allProducts } = require('../models/mocks/product.model.mock');

describe('Testes da camada service de products', function () {

  describe('Recuperando lista de products', async function () {

    it('Recuperando toda a lista de products', async function () {
      sinon.stub(productModel, 'findAll').resolves(allProducts);
   
      const result = await productService.getAll();
   
      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(allProducts);
    })

    it('Request por Id, com Id incorreto', async function () {
      
      const result = await productService.getProductById('a');
   
      expect(result.type).to.be.equal('INVALID_VALUE');
      expect(result.message).to.deep.equal('"id" must be a number');
    })

    it('Request por Id, com Id inexistente', async function () {
      sinon.stub(productModel, 'findById').resolves(undefined);
      
      const result = await productService.getProductById(1);
   
      expect(result.type).to.be.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.deep.equal('Product not found');
    })

    it('Request por Id, com Id inexistente', async function () {
      sinon.stub(productModel, 'findById').resolves(undefined);
      
      const result = await productService.getProductById(1);
   
      expect(result.type).to.be.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.deep.equal('Product not found');
    })

      it('Request por Id, com Id existente', async function () {
      sinon.stub(productModel, 'findById').resolves(allProducts[0]);
      
      const result = await productService.getProductById(1);
   
      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(allProducts[0]);
    })
  });

  afterEach(function () {
    sinon.restore();
  });
});