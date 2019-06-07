var express = require('express');
// const mysql = require('mysql');
var router = express.Router();

router.get("/search/offence=:offence?(&area=:area)?(&age=:age)?(&gender=:gender)?(&year=:year)?(&month=:month)?", function (req, res, next) {
    let offence = decodeURIComponent(req.params.offence);
    let area = decodeURIComponent(req.params.area).split(",");
    let age = decodeURIComponent(req.params.age).split(',');
    let gender = decodeURIComponent(req.params.gender).split(",");
    let year = decodeURIComponent(req.params.year).split(",");
    let month = decodeURIComponent(req.params.month).split(",");

    let query = req.db.from("offences").innerJoin('areas', 'offences.area', 'areas.area')
    query.select(req.db.raw('offences.area, areas.lat, areas.lng, sum(??) as total', [offence]))

    if (area[0] !== "undefined") {
        query.whereIn("offences.area", area)
    }
    if (age[0] != "undefined") {
        query.whereIn("offences.age", age)
    }
    if(gender[0] !== "undefined") {
        query.whereIn("offences.gender", gender)
    }
    if(year[0] !== "undefined") {
        query.whereIn("offences.year", year)
    }
    if(month[0] !== "undefined") {
        query.whereIn("offences.month", month)
    }

    query.groupBy(['offences.area', 'areas.lat', 'areas.lng']).map((row) => {
        return {
            area: row.area,
            total: row.total,
            lat: row.lat,
            lng: row.lng
        }
    })
    
    query.then((rows) => {
        res.json({
            "query": {
                offence: offence,
                area: area,
                age: age,
                gender: gender,
                year: year,
                month: month
            },
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

module.exports = router;