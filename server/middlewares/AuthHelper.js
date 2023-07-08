const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/UserModel");
const router = express.Router();
const auth = require("../controllers/AuthController");
router.post("/login", auth);

module.exports = router;
