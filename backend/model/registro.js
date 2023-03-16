// Importar las dependencias necesarias
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Conectar a la base de datos de MongoDB
mongoose.connect('mongodb://localhost:27017/usuarios', { useNewUrlParser: true });

// Definir el modelo de datos de su colección en la base de datos de MongoDB utilizando Mongoose
const Schema = mongoose.Schema;
const miSchema = new Schema({
  // Definir los campos de su colección
});

const MiModelo = mongoose.model('MiModelo', miSchema);

// Crear una instancia de la aplicación Express
const app = express();

// Agregar el middleware de bodyParser para analizar los datos del formulario enviado
app.use(bodyParser.urlencoded({ extended: true }));

// Definir una ruta que maneje la solicitud POST enviada desde su formulario HTML
app.post('/registrar', (req, res) => {
  // Extraer los datos del formulario enviado desde req.body
  const datosDelFormulario = req.body;

  // Validar y procesar los datos del formulario según sea necesario

  // Crear una instancia de su modelo de datos de Mongoose
  const miInstancia = new MiModelo(datosDelFormulario);

  // Almacenar los datos en la base de datos MongoDB utilizando Mongoose
  miInstancia.save((err) => {
    if (err) {
      // Manejar el error si la inserción falla
      console.log(err);
      res.status(500).send('Error al guardar los datos en la base de datos');
    } else {
      // Redirigir al usuario a una página de confirmación o enviar una respuesta con los datos guardados
      res.send('Los datos se han guardado correctamente');
    }
  });
});

