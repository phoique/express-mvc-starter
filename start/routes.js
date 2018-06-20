const express = require('express');
const Router = express.Router();
const indexController = require('../App/Controllers/indexController');
const error404Controller = require('../App/Controllers/error404Controller');
const app = express();

Router.get('/', indexController.home);

app.use('/', Router);
app.use(error404Controller.error404);
app.use(error404Controller.view404);

module.exports = Router;
