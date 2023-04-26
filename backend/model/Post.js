const mongoose = require('mongoose');
const coneccion = require('../db/coneccion')

const postSchema = new coneccion.Schema({

    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    
  });
  
  const Post = coneccion.model('Post', postSchema);

  module.exports = Post;