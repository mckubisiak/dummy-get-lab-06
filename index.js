const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;
const marbles = require('./data')

app.use(cors())

app.get('/', (req, res) => {

    res.json(marbles);    

});

app.listen(port, () => {

    console.log(`emaple on local port ${marbles}`)

});