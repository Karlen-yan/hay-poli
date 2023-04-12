// Importar las librerías necesarias
const express = require('express');
const coneccion = require('../db/coneccion')

// Crear el esquema y el modelo para la lista de correos electrónicos
const emailSchema = new coneccion.Schema({
  name:{type:String},
  last_name:{type:String},
  tel:{type:String},
  email: { type: String, required: true },
  message: { type: String },
  response: { type: String},
});

const Contacto = coneccion.model('Contacto', emailSchema);

module.exports = Contacto;
