const express = require('express')
const routes = require('./routes/usuarios.js')
require('dotenv').config()

const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
app.set('view engine', 'pug'); // reemplaza 'pug' con el motor de plantillas que estás usando

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


app.use(express.json())
app.use('/',routes)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`El servidor está corriendo correctamente.En el puerto ${PORT}`)
})