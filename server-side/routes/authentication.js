var express = require('express');
// const mysql = require('mysql');
var router = express.Router();

router.get("/register", function (req, res, next) {
    res.render('index', { title: 'register' });
});

router.get("/login", function (req, res, next) {
    res.render('index', { title: 'login' });
});


module.exports = router;