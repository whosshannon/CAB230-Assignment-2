var express = require('express');
// const mysql = require('mysql');
var router = express.Router();

router.get("/search", function (req, res, next) {
    res.render('index', { title: 'search' });
});


module.exports = router;