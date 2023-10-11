const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

const options = {
  errors: {
    wrap: {
      label: '',
    },
  },
};

module.exports = {
  /**
   * Validates a login request.
   * @param {object} httpRequest - The HTTP request object.
   * @param {object} httpRequest.body - The request body.
   * @param {string} httpRequest.body.email - The email to validate.
   * @param {string} httpRequest.body.password - The password to validate.
   * @returns {object} - The validation result.
   */
  validateLogin: (httpRequest) => {
    const schema = Joi.object({
      email: Joi.string()
        .pattern(/\S+@\S+\.\S+/)
        .required()
        .messages({
          'string.pattern.base': 'Provide valid email!',
        }),
      password: Joi.string().min(8).max(20).required(),
    });
    return schema.validate(httpRequest.body, options);
  },
  validateRegister: (httpRequest) => {
    const schema = Joi.object({
      fname: Joi.string().min(3).max(30).required(),
      lname: Joi.string().min(3).max(30).required(),
      email: Joi.string()
        .pattern(/\S+@\S+\.\S+/)
        .required()
        .messages({
          'string.pattern.base': 'Provide valid email!',
        }),
      phone: Joi.string().min(10).max(10).required(),
      employer: Joi.string().allow(null, ''),
    });
    return schema.validate(httpRequest.body, options);
  },
  validateReset: (httpRequest) => {
    const schema = Joi.object({
      email: Joi.string()
        .pattern(/\S+@\S+\.\S+/)
        .required()
        .messages({
          'string.pattern.base': 'Provide valid email!',
        }),
    });
    return schema.validate(httpRequest.body, options);
  }
};
