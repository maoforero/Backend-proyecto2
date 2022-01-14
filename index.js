require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { router } = require('./src/routes');

app.use('/', (req, res) => {
    res.send("Home")
})


app.listen(PORT, (req, res) => {
    console.log(`**** It's Alive 🤖 http://localhost:${PORT} ****`);
})