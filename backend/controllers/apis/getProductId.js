const Post = require('../../model/Post')

getPostById = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.json(post);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  module.exports = getPostById;
