var Students = require('../students');
var latestID = 1;
var data = [
  {
    DBid: 1,
    firstName: 'Kevin',
    lastName: 'Schwartz',
    year: 2001
  },
  {
    DBid: ++latestID,
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
  runSeed
}
