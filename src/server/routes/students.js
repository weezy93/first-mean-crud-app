var express = require('express');
var router = express.Router();
var Students = require('../models/students');

router.get('/', function (req, res, next) {
  Students.find()
  .then(function(students) {
    res.status(200).json({
      status: 'success',
      data: students
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

router.get('/:id', function (req, res, next) {
  Students.findById(req.params.id)
  .then(function (student) {
    // console.log(student);
    res.status(200).json({
      status:'success',
      data: student
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

router.post('/new', function (req, res, next) {
  var student = new Students(req.body);
  student.save()
  .then(function (student) {
    res.status(200).json(student);
  });
});

router.put('/:id', function (req, res, next) {
  var student_id = req.params.id;
  var option = req.body;
  Students.findByIdAndUpdate(student_id, option, {new:true})
  .then(function (student) {
    res.status(200).json(student);
  })
  .catch(function (err) {
    return next(err);
  });
});

router.delete('/:id', function (req, res, next) {
  var student_id = req.params.id;
  Students.findByIdAndRemove(student_id)
  .then(function (student) {
    res.status(200).json(student);
  })
  .catch(function (err) {
    return next(err);
  });
});

module.exports = router;
