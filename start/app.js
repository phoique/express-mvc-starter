const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Datebase
const datebase = require('../config/datebase')();

// Router import
const routers = require('./routes');

const app = express();

// view engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');

// Cookie
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static file 
app.use(express.static(path.join(__dirname, 'public')));

//Routers
app.use(routers);

module.exports = app;
