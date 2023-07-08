import express from "express";
import getAllStudent from "../controllers/getAllStudents";
const Router = express.Router();
Router.post("/allstudent", getAllStudent);
export default Router;
