const express = require('express');
require('./db/connection');
// const MensRanking = require('./model/mens');
const menRouter = require('./router/men');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use(menRouter);

app.listen(port, () => {
    console.log(`server running on ${port}`)
})
