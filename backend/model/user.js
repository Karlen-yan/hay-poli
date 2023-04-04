const mongoose = require('mongoose');
const coneccion = require('../db/coneccion')

const userSchema = new coneccion.Schema({
  name: String,
  password: String,
  movile: String,
  usuario:String,
    nombre: String,
    telefono: String,                     
    correo: String,
    password:String
});


const User = coneccion.model('User',userSchema);

module.exports = User;