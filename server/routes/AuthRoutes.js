import express from 'express';
import Auth from '../controllers/AuthController.js';

const Router = express.Router();

Router.post('/login', Auth)

export default Router;