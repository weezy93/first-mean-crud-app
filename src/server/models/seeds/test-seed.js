var Students = require('../students');
var data = [
  {
    firstName: 'Kevin',
    lastName: 'Schwartz',
    year: 2001
  },
  {
    firstName: 'Mike',
    lastName: 'Smith',
    year: 2007
  }
];

function runSeed(done) {
  return Students.insertMany(data)
  .then(function () {
    done();
  });
}

module.exports = {
  runSeed,
}
