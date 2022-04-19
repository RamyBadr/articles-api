const express = require('express')
const authorRoutes = require('./api/author/author.route')
const articleRoutes = require('./api/article/article.route')

const router = express.Router()




/**
 * @api {get} /api Health Check
 * @apiName Health Check
 * @apiGroup API
 * @apiVersion 1.0.0
 *
 * @apiParam none
 *
 * @apiSuccess {String} OK Success Response
 * @apiError {Object} error Error Response
 */
router.get('/', (req, res) => res.send('OK'))

/**
 * @apiDescription Mounts author routes at /auth
 * @apiGroup Authors
 */
router.use('/authors', authorRoutes)


/**
 * @apiDescription Mounts articles routes at /auth
 * @apiGroup Articles
 */
router.use('/articles', articleRoutes)

// /**
//  * @apiDescription Mounts user routes at /users
//  * @apiGroup User
//  */
// router.use('/users', userRoutes)
//
// /**
//  * @apiDescription Mounts auth routes at /auth
//  * @apiGroup Auth
//  */
// router.use('/auth', authRoutes)

module.exports = router
