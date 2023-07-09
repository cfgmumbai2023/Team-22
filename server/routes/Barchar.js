import express from "express";
import Pidata from "../controllers/onetomanyobj.js";
const Router = express.Router();

Router.get("/fetchbarchart", Pidata);

export default Router;
