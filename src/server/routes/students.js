var express = require('express');
var router = express.Router();
var Students = require('../models/students');

router.get('/', function (req, res, next) {
  Students.find({}, function (err, response) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      status: 'success',
      data: response
    });
  });
});

module.exports = router;
