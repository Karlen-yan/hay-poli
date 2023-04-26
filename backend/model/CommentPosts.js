const coneccion = require('../db/coneccion')

const commentSchema = new coneccion.Schema({
    name: { type: String, required: true },
    text: { type: String, required: true },
    time: { type: Date, default: Date.now },
    post: { type: coneccion.Schema.Types.ObjectId, ref: 'Post' }
  });
  const Comment = coneccion.model('Comment', commentSchema);

  module.exports = Comment;