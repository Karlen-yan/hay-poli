const mongoose = require('mongoose');
const coneccion = require('../db/coneccion')

const ropaSchema = new coneccion.Schema({
  name: String,
  price: String,
  category: String,
  description:String
});


const modelRopa = coneccion.model('Products',ropaSchema);

module.exports = modelRopa;