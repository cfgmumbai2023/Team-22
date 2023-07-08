import express from "express";
import getAllStudent from "../controllers/getAllStudents.js";
import addStudents from "../controllers/getAllStudents.js";
const Router = express.Router();
Router.get("/allstudent", getAllStudent);
Router.post("/addStudent", addStudents);
export default Router;
