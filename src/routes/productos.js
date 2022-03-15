const express =  require('express');
const { Router } = express();
const boom = require('@hapi/boom');
let router = new Router;

router.get("/",(req, res, next) => {

    try {
        res.send("Productos");
    } catch (error) {
        next(error)
    }
    
});

module.exports = router;