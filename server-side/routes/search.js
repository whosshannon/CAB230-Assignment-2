var express = require('express');
// const mysql = require('mysql');
var router = express.Router();

router.get("/search?:where", function (req, res, next) {
    req.db.from('offences').select('*').where("year", "=", req.params.where)
        .then((rows) => {
            res.json({
                "Error": false,
                "Message": "Success",
                "Cities": rows
            })
        })
        .catch((err) => {
            console.log(err);
            res.json({
                "Error": true,
                "Message": "Error executing MySQL query"
            })
        })
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