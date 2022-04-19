const mongoose = require('mongoose')
const { Schema } = require('mongoose')

/**
 * Author Schema
 */
const AuthorSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: 1
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  comments: {
    type: [String],
    default: []
  },
  likes: {
    type: Number,
    default: 0
  }
})

/**
 * @typedef Author
 */
module.exports = mongoose.model('Article', AuthorSchema)
