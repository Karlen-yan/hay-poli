const Comment = require('../../model/CommentPosts')


const createComment = async (req, res) => {
  const now = new Date();
  const commentData = {
    name: req.body.name,
    text: req.body.text,
    time: now ,
    post: req.params.postId
  };
  try {
    const comment = new Comment(commentData);
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
module.exports = createComment;
