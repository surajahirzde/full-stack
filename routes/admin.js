const express = require('express');
const adminRoute = express.Router();

adminRoute.get("/", (req, res) => {
    res.send("this is admin route")
})


module.exports = adminRoute