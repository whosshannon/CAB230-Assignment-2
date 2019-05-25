var createError = require('http-errors');
var express = require('express');
const mysql = require('mysql');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./database/db');

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

var helpersRouter = require('./routes/helpers');
var usersRouter = require('./routes/users');
var searchRouter = require('./routes/search');
var authenticationRouter = require('./routes/authentication');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(db);

app.use('/', helpersRouter);
app.use('/users', usersRouter);
app.use('/', searchRouter);
app.use('/', authenticationRouter);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
