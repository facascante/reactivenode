var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var config = require('config');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var emitter = require('./core/emitter');
var db = require('./core/db')(config);

require('./events/api')(emitter);
require('./events/db')(emitter,db);

var users = require('./routes/users')(emitter);

app.use('/api/users/',users);


module.exports = app;