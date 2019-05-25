var express = require('express');
// const mysql = require('mysql');
var router = express.Router();

router.get("/search", function (req, res, next) {
    res.render('index', { title: 'search' });
});

router.get('/knex', function (req, res, next) {
    req.db.raw("SELECT VERSION()")
    .then((version) => console.log((version[0][0])))
    .catch((err) => { 
        console.log(err); 
        throw err 
    })         
    res.send("Version Logged successfully");
});

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


module.exports = router;