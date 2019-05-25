var express = require('express');
const mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'My own self induced suffering' });
});

router.get("/offences", function (req, res, next) { //FIXME: format correctly; currently as 'pretty':'offence' when i think it should all be one big lump of json
  req.db.from('offence_columns').select('pretty')
    .then((rows) => {
      res.json({
        "Error": false,
        "Message": "Success",
        "Offences": rows
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

router.get("/areas", function (req, res, next) { //FIXME: same as offences
  req.db.from('areas').select('area')
    .then((rows) => {
      res.json({
        "Error": false,
        "Message": "Success",
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

router.get("/ages", function (req, res, next) { //FIXME: same as offence
  req.db.from('offences').select('age').distinct()
  .then((rows) => {
    res.json({
      "Error": false,
      "Message": "Success",
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

router.get("/genders", function (req, res, next) { //FIXME: same as offence
  req.db.from('offences').select('gender').distinct()
  .then((rows) => {
    res.json({
      "Error": false,
      "Message": "Success",
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

router.get("/years", function (req, res, next) { //FIXME: same as offence
  req.db.from('offences').select('year').distinct()
  .then((rows) => {
    res.json({
      "Error": false,
      "Message": "Success",
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


module.exports = router;
