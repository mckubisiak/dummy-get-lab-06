const app = require('./server');
const port = process.env.PORT || 4444;


app.listen(port, () => {

    console.log(`maple syrup  ${port}`)

});