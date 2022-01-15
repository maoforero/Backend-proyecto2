const express = require('express');
const { Router } = express;

let routerSms = new Router

routerSms.get("/sms", (req, res, next) => {
    res.send("sms");
})

module.exports = routerSms;