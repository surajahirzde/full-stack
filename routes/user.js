const express = require('express');
const { sendMail } = require('../controller/user.ctrl');
const userRoute = express.Router(); 


userRoute.post("/sendMail",sendMail)

module.exports = userRoute