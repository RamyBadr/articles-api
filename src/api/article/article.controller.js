const httpStatus = require('http-status')
const Article = require('./article.model')
const Author = require('../author/author.model')
const APIError = require('../../libs/APIError')
const _ = require('lodash')

/**
 * Create new article
 * @property {string} req.body.name name of article
 * @property {string} req.body.jobTitle jobTitle of article
 * @returns {<Article, Error>}
 */
async function create (req, res, next) {
  try {
    const { body: { title, body, author } } = req
    const article = new Article({
      title, body, author, likes: 0
    })
    const savedArticle = await article.save()

    return res.json(savedArticle)
  } catch (e) {
    let err = e
    if (err.code && err.code === 11000) {
      err = new APIError(err.errmsg, httpStatus.BAD_REQUEST, false)
    }
    return next(err)
  }
}

/**
 * List articles
 * @property {string} req.params.limit number of articles to be listed
 * @property {string} req.params.skip number of articles to be skipped
 * @returns {<Article[], Error>}
 */
async function list (req, res, next) {
  try {
    const { skip, limit } = req.query
    const articles = await Article.find({}, {}, { limit, skip, sort: { likes: -1 }, populate: { path: 'author', select: ['name'] } })
    return res.json(articles)
  } catch (e) {
    next(e)
  }
}

/**
 * Search Article
 * @property {string} req.query.search search in articles titles
 * @returns {<Article[], Error>}
 */
async function search (req, res, next) {
  const { query: { search } } = req
  const articles = await Article.find(
    { title: { $regex: search, $options: 'i' } },
    {},
    { populate: {
      path: 'author', select: ['name']
    }
    })
  return res.json(articles)
}

/**
 * Comment On Article
 * @property {string} req.query.search search in articles titles
 * @returns {<Article, Error>}
 */
async function comment (req, res, next) {
  const { body: { comment }, params: { articleId } } = req
  const article = await Article.findByIdAndUpdate(articleId, { $push: { comments: comment } })
  return res.json(article)
}

/**
 * Comment On Article
 * @property {string} req.query.search search in articles titles
 * @returns {<Article, Error>}
 */
async function like (req, res, next) {
  const { params: { articleId } } = req
  const article = await Article.findById(articleId)
  if (!article) {
    throw new APIError('Article not found!!', httpStatus.BAD_REQUEST)
  }
  const [likedArticle, likedAuthor] = await Promise.all([
    Article.findByIdAndUpdate(articleId, { $inc: { likes: 1 } }, { new: true }),
    Author.findByIdAndUpdate(article.author, { $inc: { likes: 1 } }, { new: true })
  ])
  return res.json({ likedArticle, likedAuthor })
}

/**
 * Get Article
 * @property {string} req.params.articleId _id of article
 * @returns {<Article, Error>}
 */
async function get (req, res, next) {
  const { params: { articleId } } = req
  const article = await Article.findById(articleId, {}, { populate: {
    path: 'author'
  } })
  return res.json(article)
}

module.exports = {
  create,
  list,
  search,
  get,
  comment,
  like
}
