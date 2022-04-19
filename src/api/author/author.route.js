const { Router } = require('express')
const validate = require('express-validation')

const authorParam = require('./author.param')
const authorCtrl = require('./author.controller')

const router = Router()

router.route('/')
  /**
   * @api {get} /api/authors List Authors
   * @apiName List Authors
   * @apiGroup Author
   * @apiVersion 1.0.0
   *
   * @apiParam none
   *
   * @apiSuccess {Array} authors List of authors
   * @apiError {Object} error Error response
   */
  .get(validate(authorParam.list), authorCtrl.list)

  /**
   * @api {post} /api/authors Create Author
   * @apiName Create Author
   * @apiGroup Author
   * @apiVersion 1.0.0
   *
   * @apiParam (body) {String} name of author
   * @apiParam (body) {String}  jobTitle of author , optional
   *
   * @apiSuccess {Object} authors List of authors
   * @apiError {Object} error: Error response
   */
  .post(validate(authorParam.create), authorCtrl.create)

module.exports = router
