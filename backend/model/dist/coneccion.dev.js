"use strict";

require('dotenv').config();

var mongoose = require('mongoose');

var URL = process.env.MONGODB_URI;
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var connection = mongoose.connection;
connection.on('connected', function () {
  console.log('Conección correcta');
});
connection.on('error', function () {
  console.log('Error en la conección');
});
module.exports = mongoose;