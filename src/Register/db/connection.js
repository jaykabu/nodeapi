const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/register-form", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connection successful')
}).catch((e) => {
    console.log('connection failed')
});


