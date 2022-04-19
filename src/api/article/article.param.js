const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
module.exports = {
  /**
   * @apiName Create Article
   * @apiGroup Article
   */
  create: {
    body: {
      title: Joi.string().required(),
      body: Joi.string().optional(),
      author: Joi.objectId().required()
    }
  },

  /**
   * @apiName Get Article
   * @apiGroup Article
   */
  get: {
    params: {
      articleId: Joi.objectId().required()
    }
  }, /**
   * @apiName Get Article
   * @apiGroup Article
   */

  search: {
    query: {
      search: Joi.string().min(3).required()
    }
  },
  /**
   * @apiName Update Article
   * @apiGroup Article
   */
  update: {
    params: {
      articleId: Joi.string().required()
    },
    body: {
      title: Joi.string().required(),
      body: Joi.string().optional(),
      author: Joi.objectId().required()
    }
  },
  /**
   * @apiName Comment on Article
   * @apiGroup Article
   */
  comment: {
    params: {
      articleId: Joi.objectId().required()
    },
    body: {
      comment: Joi.string().min(3).required()
    }
  },

  /**
   * @apiName Like Article
   * @apiGroup Article
   */
  like: {
    params: {
      articleId: Joi.objectId().required()
    }
  },

  /**
   * @apiName List Articles
   * @apiGroup Article
   */
  list: {
    query: {
      skip: Joi.number(),
      limit: Joi.number()
    }
  }
}
