const { Router } = require('express')
const router = Router()

const {
 getPosts,
 getPostBySlug,
 createPost,
 deletePost,
 updatePost
} = require('../controllers/post.controller')

router.get('/api/post', getPosts)
router.get('/api/post/:slug', getPostBySlug)
router.post('/api/post/new', createPost)
router.put('/api/post/update', updatePost)
router.delete('/api/post/delete/:id', deletePost)

module.exports = router