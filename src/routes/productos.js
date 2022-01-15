const express =  require('express');
const { Router } = express();
let routerPro = new Router;

routerPro.get("/productos",(req, res, next) => {
    res.send("Productos");
});

module.exports = routerPro;