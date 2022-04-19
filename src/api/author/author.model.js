const mongoose = require('mongoose')

/**
 * Author Schema
 */
const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  jobTitle: {
    type: String,
    required: false
  },
  likes: {
    type: Number,
    default: 0
  }
})

/**
 * @typedef Author
 */
module.exports = mongoose.model('Author', AuthorSchema)
