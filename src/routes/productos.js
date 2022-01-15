const express =  require('express');
const { send } = require('express/lib/response');
const routerPro = express.Router();

routerPro.get("/productos",(req, res, next) => {
    res.send("Productos");
})