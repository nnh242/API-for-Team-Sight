const mocha = require ('mocha')
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js');

const should = chai.should();
const app = server.app;

chai.use(chaiHttp);

describe('API', function() {
    it('should 200 on GET requests', function() {
      return chai.request(app)
        .get('/api/')
        .then(function(res) {
          res.should.have.status(200);
          res.should.be.json;
        });
    });
  });