const Joi = require('joi')

module.exports = {
  /**
   * @apiName Create Author
   * @apiGroup Author
   */
  create: {
    body: {
      name: Joi.string().required(),
      jobTitle: Joi.string().optional()
    }
  },

  /**
   * @apiName Get Author
   * @apiGroup Author
   */
  get: {
    params: {
      authorId: Joi.string().required()
    }
  },

  /**
   * @apiName Update Author
   * @apiGroup Author
   */
  update: {
    params: {
      authorId: Joi.string().required()
    },
    body: {
      name: Joi.string().required(),
      jobTitle: Joi.string().optional()
    }
  },

  /**
   * @apiName List Authors
   * @apiGroup Author
   */
  list: {
    query: {
      skip: Joi.number().optional(),
      limit: Joi.number().optional()
    }
  },

  /**
   * @apiName Delete Author
   * @apiGroup Author
   */
  remove: {
    headers: {
      authorization: Joi.string().required()
    },
    params: {
      authorId: Joi.string().required()
    }
  }
}
