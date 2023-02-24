const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const { productController } = require("../../../src/controllers");
const { productService } = require("../../../src/services");

const { allProducts } = require("../models/mocks/product.model.mock");
const { oneId } = require("./mocks/product.controller.mock");

describe("Testes da camada controller de products", function () {
  describe("Recuperando lista de products", async function () {
    it("Deve retornar o status 200 e a lista", async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, "getAll")
        .resolves({ type: null, message: allProducts });

      await productController.listProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProducts);
    });
  });

  describe("Recuperando um produto por Id", async function () {
    it("deve responder com 200 e os dados do banco quando existir", async function () {
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, "getProductById")
        .resolves({ type: null, message: oneId });

      await productController.productById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(oneId);
    });

    it("ao passar um id inválido deve retornar um erro", async function () {
      const res = {};
      const req = {
        params: { id: "abc" },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, "getProductById")
        .resolves({ type: "INVALID_VALUE", message: '"id" must be a number' });

      await productController.productById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({
        message: '"id" must be a number',
      });
    });

    it("ao passar um id que não existe no banco deve retornar um erro", async function () {
      const res = {};
      const req = {
        params: { id: 666 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productService, "getProductById").resolves({
        type: "PRODUCT_NOT_FOUND",
        message: "Product not found",
      });

      await productController.productById(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({
        message: "Product not found",
      });
    });

    afterEach(function () {
      sinon.restore();
    });
  });
});
