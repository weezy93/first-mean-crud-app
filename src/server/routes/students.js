var express = require('express');
var router = express.Router();
var Students = require('../models/students');

router.get('/', function (req, res, next) {
  Students.find({})
  .then(function(student) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      status: 'success',
      data: response
    });
  });
});

router.get('/:id', function (req, res, next) {
  Students.find({DBid: req.params.id}, function (err, response) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      status: 'success',
      data: response
    });
  });
});

router.post('/new', function (req, res, next) {
  var student = new Students(req.body);
  student.save(function(err, saved) {
    Students.findOne({DBid: 3}, function (err, student) {
      res.status(200).json(student);
    });
  });
});

router.put('/:id/update', function (req, res, next) {
  var student_id = req.params.id;
  var option = req.body;
  Students.findByIdAndUpdate(student_id, option, {new:true}, function (err, student) {
    if (err) {
      return next(err);
    }
    res.status(200).json(student);
  });
});

router.delete('/:id/delete', function (req, res, next) {
  var student_id = req.params.id;
  Students.findByIdAndRemove(student_id, function (err, student) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      status: 'success',
      data: student
    });
  });
});

module.exports = router;
