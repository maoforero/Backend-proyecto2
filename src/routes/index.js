const express = require('express')
const app =  express();
const router = express.Router

const productsRouter = require('./productos');
const carRouter = require('./carritos');

app.use('/api', productsRouter);
router.use('/productos', carRouter);



module.export = router;