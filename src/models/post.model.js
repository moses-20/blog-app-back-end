const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slugify = require('slugify')

const postSchema = new Schema({
 image: String,
 title: {
  type: String,
  required: true
 },
 author: {
  type: String,
  required: true
 },
 description: String,
 markdown: {
  type: String,
  required: true
 },
 createAt: {
  type: Date,
  default: Date.now,
 },
 slug: {
  type: String,
  required: true,
  unique: true
 }
}, { timestamps: true } )

postSchema.pre('validate', function(next) {
 const post = this

 if(post.title) {
  post.slug = slugify(post.title, { lower: true, strict: true })
 }

 next()
})

const Post = mongoose.model('posts', postSchema)

module.exports = Post