var express = require('express');
// const mysql = require('mysql');
var router = express.Router();

router.get("/search/offence=:offence?(&area=:area)?(&age=:age)?(&gender=:gender)?(&year=:year)?(&month=:month)?", function (req, res, next) {
    let offence = decodeURIComponent(req.params.offence);
    let area = decodeURIComponent(req.params.area);
    let age = decodeURIComponent(req.params.age);
    let gender = decodeURIComponent(req.params.gender);
    let year = decodeURIComponent(req.params.year);
    let month = decodeURIComponent(req.params.month);
    
    let query = req.db.from("offences").innerJoin('areas', 'offences.area', 'areas.area')


    query.select(req.db.raw('offences.area, areas.lat, areas.lng, sum(??)', [offence]))
    query.whereRaw("?? <> 0", [offence])
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

router.get("/search/test/offence=:offence?(&area=:area)?(&age=:age)?(&gender=:gender)?(&year=:year)?(&month=:month)?", function (req, res, next) {
    let offence = decodeURIComponent(req.params.offence);
    let area = decodeURIComponent(req.params.area);
    let age = decodeURIComponent(req.params.age);
    let gender = decodeURIComponent(req.params.gender);
    let year = decodeURIComponent(req.params.year);
    let month = decodeURIComponent(req.params.month);
    
    let query = req.db.from("offences").innerJoin('areas', 'offences.area', 'areas.area')


    query.select(req.db.raw('offences.area, areas.lat, areas.lng, sum(??)', [offence]))
    query.whereRaw("?? <> 0", [offence])
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