const express = require('express');
const cors = require('cors')
const app = express();
const marbles = require('./data')

app.use(cors())

app.get('/', (req, res) => {

    res.json(marbles);    

});

app.get('/:id', (req, res) => {
const id = Number(req.params.id);

const marble = marbles.results.find((loneMarble) => loneMarble.id === id)


});

module.exports = app;
