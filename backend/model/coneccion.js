require('dotenv').config()
const mongoose = require('mongoose');

const URL = process.env.MONGODB_URI;
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})