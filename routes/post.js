const express = require('express');
const { addPost, getAllPost, getPost } = require('../controllers/PostController');

const router = express.Router();

router.post('/addpost', addPost);
router.get('/getallposts',getAllPost)
router.get('/getpost',getPost)

module.exports = router;
