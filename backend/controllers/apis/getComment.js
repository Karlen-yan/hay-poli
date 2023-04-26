const Comment = require('../../model/CommentPosts')

const getCommentsByPostId = async (req, res) => {
    try {
      const comments = await Comment.find({ post: req.params.id });
      res.json(comments);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  module.exports = getCommentsByPostId;

