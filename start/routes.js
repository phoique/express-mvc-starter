var express = require('express');
var homeRouter = express.Router();
var indexController = require('../App/Controllers/indexController');
var error404Controller = require('../App/Controllers/error404Controller');
var app = express();

homeRouter.get('/', indexController.home);

app.use('/', homeRouter);
app.use(error404Controller.error404);
app.use(error404Controller.view404);

module.exports = homeRouter;
