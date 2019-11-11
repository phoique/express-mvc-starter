import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from'morgan';

// Datebase
import datebase from '../config/datebase';

// Router import
const routers = require('./routes');

const app = express();
datebase();

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

export default app;
