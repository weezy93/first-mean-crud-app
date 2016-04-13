var mongoose = require('mongoose');

// drop database
function dropDatabase(done) {
  mongoose.connection.db.dropDatabase();
  done();
}

// drop, seed, create database goes here so code can be reused


module.exports = {
  dropDatabase
}
