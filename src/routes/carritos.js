const express = require('express');
const { Router } = express;

let routerSms = new Router

routerSms.get("/carritos", (req, res, next) => {
    res.send("carritos");
})

module.exports = routerSms;