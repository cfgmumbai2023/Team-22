import express from "express";
import jwt from "jsonwebtoken"
import User from "../models/UserModel.js"
const router = express.Router();
import auth from "../controllers/AuthController.js"
import getStudent from "../controllers/getStudent.js"


router.get("/teacherstudent", getStudent);

export default router;
