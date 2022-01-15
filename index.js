require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', (req, res) => {
    res.send("Home")
})


app.listen(PORT, (req, res) => {
    console.log(`**** It's Alive 🤖 http://localhost:${PORT} ****`);
})