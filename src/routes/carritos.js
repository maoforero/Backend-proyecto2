const express = require('express');
const { Router } = express;
const {resError, errorHandler} = require("../middlewares/error.handler")

let routerSms = new Router

routerSms.get("/carritos", (req, res, next) => {
    try {
        res.send("carritos");
    } catch (error) {
        next(error);
    }
})

module.exports = routerSms;