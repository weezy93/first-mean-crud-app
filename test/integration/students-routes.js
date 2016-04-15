process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var should = chai.should();
var testUtilities = require('../utilities');
var testSeed = require('../../src/server/models/seeds/test-seed');
var Students = require('../../src/server/models/students');

chai.use(chaiHttp);

describe('student routes', function() {

  beforeEach(function (done) {
    testUtilities.dropDatabase();
    testSeed.runSeed(done);
  });

  afterEach(function (done) {
    testUtilities.dropDatabase(done);
  });

  // get all
  describe('/GET students', function () {

    it('should return all students', function(done) {
      chai.request(server)
      .get('/students')
      .end(function (err, res) {
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        res.body.data.should.be.a('array');
        res.body.data.length.should.equal(2);
        res.body.data[0].should.have.property('firstName');
        res.body.data[0].should.have.property('lastName');
        res.body.data[0].should.have.property('year');
        res.body.data[0].firstName.should.equal('Kevin');
        res.body.data[0].lastName.should.equal('Schwartz');
        res.body.data[0].year.should.equal(2001);
        done();
      });
    });
  });

  // get single
  describe('/GET-ONE students', function () {

    it('should return one student', function(done) {
      Students.findOne(function (err, student) {
          var student_id = student._id;
        chai.request(server)
        .get('/students/' + student_id)
        .end(function (err, res) {
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('firstName');
          res.body.data.should.have.property('lastName');
          res.body.data.should.have.property('year');
          res.body.data.firstName.should.equal('Kevin');
          res.body.data.lastName.should.equal('Schwartz');
          res.body.data.year.should.equal(2001);
          done();
        });
      });
    });
  });

  // post
  describe('/POST students', function () {

    it('should add one student', function(done) {
      chai.request(server)
      .post('/students/new')
      .send({
        firstName: 'Kirk',
        lastName: 'Steele',
        year: 1997
      })
      .end(function (err, res) {
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        res.body.should.be.a('object');
        res.body.should.have.property('firstName');
        res.body.should.have.property('lastName');
        res.body.should.have.property('year');
        res.body.firstName.should.equal('Kirk');
        res.body.lastName.should.equal('Steele');
        res.body.year.should.equal(1997);
        done();
      });
    });
  });
  // put
  describe('/PUT students', function () {

      it('should update a single student', function(done) {
        Students.findOne(function (err, student) {
          var student_id = student._id;
          chai.request(server)
          .put('/students/' + student_id)
          .send({ year: 2030 })
          .end(function (err, res) {
            res.status.should.equal(200);
            res.type.should.equal('application/json');
            res.body.should.be.a('object');
            res.body.should.have.property('firstName');
            res.body.should.have.property('lastName');
            res.body.should.have.property('year');
            res.body.firstName.should.equal('Kevin');
            res.body.lastName.should.equal('Schwartz');
            res.body.year.should.equal(2030);
            done();
          });
        });
      });
  });

  // delete
  describe('/DELETE students', function () {

    xit('should delete a single student', function(done) {
      Students.findOne(function (err, student) {
        var student_id = student._id;
        chai.request(server)
        .delete('/students/delete/' + student_id)
        .end(function (err, res) {
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          done();
        });
      });
    });
  });
});
