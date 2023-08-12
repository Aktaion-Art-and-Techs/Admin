const router = require('express').Router();
const { createPost, listPosts, updatePost, deletePost } = require('../controllers/post.ctrl');

router.route('/')
    .get(listPosts)
    .post(createPost);

router.route('/:id')
    .put(updatePost)
    .delete(deletePost);

module.exports = router;
