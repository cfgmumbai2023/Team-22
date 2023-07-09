import express from "express";
import Pidata from "../controllers/oneobjtomanystud.js";
const Router = express.Router();

Router.get("/fetchpie", Pidata);

export default Router;
