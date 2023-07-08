import express from express
import jwt from jsonwebtoken
import User from "../models/UserModel"
const router = express.Router();
import auth from "../controllers/AuthController"
import getStudent from "../controllers/getStudent"
router.get("/teacherstudent",getStudent );
export default router;
