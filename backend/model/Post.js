const mongoose = require('mongoose');
const coneccion = require('../db/coneccion')

const postSchema = new coneccion.Schema({
    id: {
      type: Number,
      required: true
    },
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
    }
  });
  
  const Post = coneccion.model('Post', postSchema);

  module.exports = Post;