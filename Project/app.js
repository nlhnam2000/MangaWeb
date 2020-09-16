var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//note: npm install serve-favicon
//note2: step by step: close browser - npm start - re-open browser - access default port of express (localhost:3000)  
var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/public/images/favicon.ico'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
