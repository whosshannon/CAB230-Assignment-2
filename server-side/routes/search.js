var express = require('express');
// const mysql = require('mysql');
var router = express.Router();

router.get("/search/offence=?:offence", function (req, res, next) { //offence&:area&:age&:gender&:year:&month
    let query = req.db.from("offences").innerJoin('areas', 'offences.area', 'areas.area')

    
    query.select(req.db.raw('offences.area, areas.lat, areas.lng, count(??)', [decodeURIComponent(req.params.offence)]))
    query.whereRaw("?? <> 0", [decodeURIComponent(req.params.offence)])
    query.groupBy(['offences.area', 'areas.lat', 'areas.lng'])
    query.then((rows) => {
            res.json({
                "query": "",
                "result": rows
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

router.get("/search/test/offence=?:offence", function (req, res, next) {//offence&:area&:age&:gender&:year:&month
    let query = req.db.from("offences").innerJoin('areas', 'offences.area', 'areas.area')


    query.select(req.db.raw('offences.area, areas.lat, areas.lng, sum(??)', [decodeURIComponent(req.params.offence)]))
    query.whereRaw("?? <> 0", [decodeURIComponent(req.params.offence)])
    query.groupBy(['offences.area', 'areas.lat', 'areas.lng'])
    query.then((rows) => {
            res.json({
                "query": "",
                "result": rows
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

module.exports = router;