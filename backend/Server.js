const express = require('express')
const routes = require('./routes/usuarios.js')
require('dotenv').config()

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/',routes)
app.use(express.json())
const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`El servidor está corriendo correctamente.En el puerto ${PORT}`)
})