const express = require('express');
const payRoute = express.Router();


payRoute.get("/", (req, res) => {
    res.send("this is pay route")
})

module.exports = payRoute