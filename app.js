const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const auth = require('./security/auth');
const bodyParser = require('body-parser');

const redirectRouter = require('./routes/redirect');
const urlRouter = require('./routes/urls');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/url' , auth);
app.use('/url' , urlRouter);
app.use('/', redirectRouter);

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
  res.send('Nothing here');
});

module.exports = app;