import express from "express";
import Pimanydata from "../controllers/manyobjtomanystud.js";
const Router = express.Router();

Router.get("/fetchline", Pimanydata);

export default Router;
