const { Router } = require('express')
const validate = require('express-validation')

const articleParam = require('./article.param')
const articleCtrl = require('./article.controller')

const router = Router()

router.route('/')
  /**
   * @api {get} /api/articles List Articles
   * @apiName List Articles
   * @apiGroup Article
   * @apiVersion 1.0.0
   *
   * @apiParam none
   *
   * @apiSuccess {Array} articles List of articles
   * @apiError {Object} error Error response
   */
  .get(validate(articleParam.list), articleCtrl.list)

  /**
   * @api {post} /api/articles Create Article
   * @apiName Create Article
   * @apiGroup Article
   * @apiVersion 1.0.0
   *
   * @apiParam (body) {String}  title of article
   * @apiParam (body) {String}  body of article
   * @apiParam (body) {String}  author of article
   *
   * @apiSuccess {Object} articles List of articles
   * @apiError {Object} error: Error response
   */
  .post(validate(articleParam.create), articleCtrl.create)


router.route('/search')
  /**
   * @api {search} /api/articles/search Search Articles
   * @apiName Search Articles
   * @apiGroup Article
   * @apiVersion 1.0.0
   *
   * @apiQuery (query) {string}  search
   *
   * @apiSuccess {Array} articles List of articles
   * @apiError {Object} error response
   */
  .get(validate(articleParam.search), articleCtrl.search)



router.route('/:articleId')
  /**
   * @api {get} /api/articles/:articleId Get Article
   * @apiName Get Article
   * @apiGroup Article
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} articleId _id of article
   *
   * @apiSuccess {Object} article Details of article
   * @apiError {Object} error Error response
   */
  .get(validate(articleParam.get), articleCtrl.get)



router.route('/:articleId/comment')
  /**
   * @api {get} /api/articles/:articleId Get Article
   * @apiName Get Article
   * @apiGroup Article
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} articleId _id of article
   *
   * @apiSuccess {Object} article Details of article
   * @apiError {Object} error response
   */
  .put(validate(articleParam.comment), articleCtrl.comment)

router.route('/:articleId/like')
  /**
   * @api {search} /api/articles/like Like an Article
   * @apiName Like Article
   * @apiGroup Article
   * @apiVersion 1.0.0
   *
   * @apiBody (body) {string}  articleId
   *
   * @apiSuccess {Array} articles List of articles
   * @apiError {Object} error response
   */
  .get(validate(articleParam.like), articleCtrl.like)

module.exports = router
