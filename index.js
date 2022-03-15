require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./src/routes/index');
const { errorHandler, resError} = require('./src/middlewares/error.handler')


//Routing
app.use('/', (req, res) => {
    res.send("Home")
})

//Middleware Error
app.use(resError);
app.use(errorHandler);


app.listen(PORT, (req, res) => {
    console.log(`**** It's Alive 🤖 http://localhost:${PORT} ****`);
})