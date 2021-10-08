const mongoose = require('mongoose')
const uri = 'mongodb+srv://node-auth:123@ya28.ns5c7.mongodb.net/Attractions?retryWrites=true&w=majority'
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(r => {
        console.log('Connected to DB')
    })
    .catch(err => {
        console.log(err)
    });