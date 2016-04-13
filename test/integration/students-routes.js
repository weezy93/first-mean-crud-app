process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var should = chai.should();
var testUtilities = require('../utilities');

chai.use(chaiHttp);

describe('student routes', function() {

  beforeEach(function (done) {
    testUtilities.dropDatabase(done);
  });

  afterEach(function (done) {
    testUtilities.dropDatabase(done);
  });

    it('a basic test can be ran', function(done) {
      function add(num1, num2) {
        return num1 + num2;
      }
      add(1, 1).should.equal(2);
      done();
    });

});
