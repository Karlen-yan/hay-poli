require('dotenv').config()
const mongoose = require('mongoose');

const URL = process.env.MONGODB_URI;

mongoose.connect(URL,{

    useNewUrlParser: true,
    useUnifiedTopology: true

})

const connection = mongoose.connection

connection.on('connected',()=>{console.log('Conección correcta')})
connection.on('error',()=>{console.log('Error en la conección')})
module.exports = mongoose