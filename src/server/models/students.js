var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;
var faker = require('faker');

var StudentSchema = new Schema ({
  DBid: Number,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  year: { type: Number, required: true}
});

var Student = mongoose.model('students', StudentSchema);

// var student = new Student({
//   firstName: faker.name.firstName(),
//   lastName: faker.name.lastName(),
//   year: faker.random.number(6)
// });
//
// student.save()
// .then(function (result) {
//   console.log('result', result);
// })
// .catch(function (err) {
//   console.log('err', err);
// });

module.exports = Student;
