var express = require('express');
//const mysql = require('mysql');
var router = express.Router();

router.get("/offences", function (req, res, next) {
  req.db.from('offence_columns').select('pretty').map((row) => {
    return row.pretty;
  })
    .then((rows) => {
      res.json({
        "offences": rows
      })
    })
    .catch((err) => {
      console.log(err);
      res.json({
        "Error": true,
        "Message": "Error in MySQL query"
      });
    })
});

router.get("/areas", function (req, res, next) {
  req.db.from('areas').select('area').map((row) => {
    return row.area;
  })
    .then((rows) => {
      res.json({
        "Areas": rows
      })
    })
    .catch((err) => {
      console.log(err);
      res.json({
        "Error": true,
        "Message": "Error in MySQL query"
      })
    })
});

router.get("/ages", function (req, res, next) { 
  req.db.from('offences').select('age').distinct().map((row) => {
    return row.age;
  })
    .then((rows) => {
      res.json({
        "Ages": rows
      })
    })
    .catch((err) => {
      console.log(err);
      res.json({
        "Error": true,
        "Message": "Error in MySQL query"
      })
    })
});

router.get("/genders", function (req, res, next) { 
  req.db.from('offences').select('gender').distinct().map((row) => {
    return row.gender;
  })
    .then((rows) => {
      res.json({
        "Genders": rows
      })
    })
    .catch((err) => {
      console.log(err);
      res.json({
        "Error": true,
        "Message": "Error in MySQL query"
      })
    })
});

router.get("/years", function (req, res, next) { 
  req.db.from('offences').select('year').distinct().map((row) => {
    return row.year;
  })
    .then((rows) => {
      res.json({
        "Years": rows
      })
    })
    .catch((err) => {
      console.log(err);
      res.json({
        "Error": true,
        "Message": "Error in MySQL query"
      })
    })
});


module.exports = router;
