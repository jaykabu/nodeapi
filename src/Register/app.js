const express = require('express');
require('./db/connection');
const Register = require('./model/register');
const router = require('./router/registerRoutting')

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(router);


app.listen(port, () => {
    console.log(`server running on ${port}`)
});
