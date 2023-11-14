const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController')

// /posts
router
    .route('/')
    .get(postController.listAllPosts)
    .post(postController.createAPost)
    .get(postController.getAPost)
    .put(postController.updateAPost)
    .delete(postController.deleteAPost)
module.exports = router;