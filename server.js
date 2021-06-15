const express = require('express');
const app = express();
const port = 3000;


app.get(('./', req, res) => {

    res.send('Check out hospital bracelet');

});

app.listen(() => {

    console.log(`  port ${port}`)

});