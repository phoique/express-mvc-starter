import express from 'express';
import indexController from '../App/Controllers/indexController';
import error404Controller from '../App/Controllers/error404Controller';

const Router = express.Router();
const app = express();

Router.get('/', indexController.home);

app.use('/', Router);
app.use(error404Controller.error404);
app.use(error404Controller.view404);

export default Router;
