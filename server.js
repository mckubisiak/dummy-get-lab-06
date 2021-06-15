const express = require('express');
const cors = require('cors')
const app = express();
const port = 4000;
const marbles = require('./data')

app.use(cors())

app.get('/', (req, res) => {

    res.json(marbles);    

});

module.exports = app;
