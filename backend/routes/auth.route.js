const express = require('express');
const {login, signup} = require('../controllers/auth.controller.js');
const authRouter = express.Router();

authRouter.post("/signup", signup)
authRouter.post("/login", login)

module.exports = authRouter