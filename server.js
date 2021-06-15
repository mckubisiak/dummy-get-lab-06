const express = require('express');
const cors = require('cors')
const app = express();
const marbles = require('./data')

app.use(cors())

app.get('/marble', (req, res) => {

    res.json(marbles);    

});

app.get('/marble/:id', (req, res) => {
const id = Number(req.params.id);

const marble = marbles.find((loneMarble) => loneMarble.id === id)

res.json(marble);    


});

module.exports = app;
