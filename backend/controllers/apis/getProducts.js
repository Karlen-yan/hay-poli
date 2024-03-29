const Post = require('../../model/Post')

getProducts =  async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  module.exports = getProducts;