var express = require('express');
const mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'My own self induced suffering' });
});

router.get("/offences", function (req, res, next) {
  // var query = "SELECT name, district FROM ??";
  // var table = ["city"];
  // query = mysql.format(query, table);
  // req.db.query(query, function (err, rows) {
  //   if (err) {
  //     res.json({
  //       "Error": true,
  //       "Message": "Error executing MySQL query"
  //     });
  //   } else {
  //     res.json({
  //       "Error": false,
  //       "Message": "Success",
  //       "City": rows
  //     });
  //   }
  // });
  res.render('index', { title: 'Offences' });
});

router.get("/area", function (req, res, next) {
  // var query = "SELECT * FROM ?? WHERE ??=?";
  // var table = ["city", "CountryCode", req.params.CountryCode];
  // query = mysql.format(query, table);
  // req.db.query(query, function (err, rows) {
  //   if (err) {
  //     res.json({
  //       "Error": true,
  //       "Message": "Error executing MySQL query"
  //     });
  //   } else {
  //     res.json({
  //       "Error": false,
  //       "Message": "Success",
  //       "Cities": rows
  //     });
  //   }
  // });
  res.render('index', { title: 'Area' });
});

router.get("/ages", function (req, res, next) {
  res.render('index', { title: 'Ages' });
});

router.get("/genders", function (req, res, next) {
  res.render('index', { title: 'Genders' });
});

router.get("/years", function (req, res, next) {
  res.render('index', { title: 'Years' });
});


module.exports = router;
