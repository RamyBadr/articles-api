const httpStatus = require('http-status')
const Author = require('./author.model')
const APIError = require('../../libs/APIError')

/**
 * Create new author
 * @property {string} req.body.name name of author
 * @property {string} req.body.jobTitle jobTitle of author
 * @returns {<Author, Error>}
 */
async function create (req, res, next) {
  try {
    const { body: { name, jobTitle } } = req
    const author = new Author({
      name,
      jobTitle
    })
    const savedAuthor = await author.save()
    return res.json(savedAuthor)
  } catch (e) {
    let err = e
    if (err.code && err.code === 11000) {
      err = new APIError(err.errmsg, httpStatus.BAD_REQUEST, false)
    }
    return next(err)
  }
}

/**
 * List authors
 * @property {string} req.params.limit number of authors to be listed
 * @property {string} req.params.skip number of authors to be skipped
 * @returns {<Author[], Error>}
 */
async function list (req, res, next) {
  try {
    const { skip, limit } = req.query
    const authors = await Author.find({}, {}, { limit, skip, sort: { likes: -1, _id: -1 } })
    return res.json(authors)
  } catch (e) {
    next(e)
  }
}

module.exports = {
  create,
  list
}
