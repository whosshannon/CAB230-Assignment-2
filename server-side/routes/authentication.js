var express = require('express');
// const mysql = require('mysql');
var router = express.Router();

router.get("/register", function (req, res, next) {
    res.render('index', { title: 'register' });
});

router.post("/login", function (req, res) {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({message: `Error whoops`});
        console.log(`Error on request body`, JSON.stringify(req.body));
    } else {
        const filter = {
            "email": req.body.email,
            "password": req.body.password
        };
        const time = {
            "updated_at":"CURRENT_TIMESTAMP"
        }
        req.body('users').where(filter).update(time)
        .then(_=> {
            res.status(201).json({ message: `Successful update ${req.body.email}`});
            console.log(`Successful updated_at update:`, JSON.stringify(filter));
        }).catch(error => {
            res.status(500).json({message: 'Database error - not updated'});
        })
    }
});


module.exports = router;