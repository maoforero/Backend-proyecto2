const express = require('express');
const { Router } = express;

let router = new Router

router.get("/", (req, res, next) => {
    try {
        res.send("carritos");
    } catch (error) {
        next(error);
    }
})

module.exports = router; 