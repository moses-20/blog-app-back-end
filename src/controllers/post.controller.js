const Post = require('../models/post.model')

const postControl = {}

// create
postControl.createPost = async (req, res) => {
 const newPost = new Post(req.body)
 try {
  await newPost.save()
  console.log(newPost)
  res.status(200).send({ message: 'post created!' })
 } catch (error) {
  res.status(500).send({message: 'there was an error', error})
 }
}

// read
postControl.getPosts = async (req, res) => {
 try {
  let posts = await Post.find()
  if(posts) {
   res.status(200).send(posts)
  } else {
   res.status(404).send({error: 'no post found!'})
  }
 } catch (error) {
  res.status(500).send(error)
 }
}

// read posts by slug
postControl.getPostBySlug = async (req, res) => {
 try {
  let post = await Post.findOne({ slug: req.params.slug })
  res.status(200).send(post)
 } catch (error) {
  res.status(404).send(error)
 }
}

// update
postControl.updatePost = async (req, res) => {
 const { image, title, description, markdown } = req.body

 try {
  await Post.findOneAndUpdate(
   { _id: req.params.id },
   { image, title, description, markdown }
  )
 } catch (error) {
  res.status(500).send(error)
 }

}

// delete
postControl.deletePost = async (req, res) => {
 try {
  await Post.findOneAndDelete({ _id: req.params.id })
  res.status(200).send({message: 'delete complete!'})
 } catch (error) {
  res.status(500).send(error)
 }
}

module.exports = postControl