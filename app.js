var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chartjsRouter = require('./routes/chartjs');
var documentationRouter = require('./routes/documentation');
var basic_elementsRouter = require('./routes/basic_elements');
var mdiRouter = require('./routes/mdi');
var loginRouter = require('./routes/login')
var registerRouter = require('./routes/register');
var error500Router = require('./routes/error500');
var error404Router = require('./routes/error404');
var basic_tableRouter = require('./routes/basic_table');
var buttonsRouter = require('./routes/buttons');
var dropdownsRouter = require('./routes/dropdowns');
var typographyRouter = require('./routes/typography');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chartjs', chartjsRouter);
app.use('/documentation', documentationRouter);
app.use('/basic_elements', basic_elementsRouter);
app.use('/mdi', mdiRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/error500', error500Router);
app.use('/error404', error404Router);
app.use('/basic_table', basic_tableRouter);
app.use('/buttons', buttonsRouter);
app.use('/dropdowns', dropdownsRouter);
app.use('/typography', typographyRouter);


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
