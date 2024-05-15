const Joi = require("joi");

const userValidation = Joi.object({
  email: Joi.string().email().min(3).max(254).required(),
  password: Joi.string().min(8).max(100).required(),
});

module.exports = {
  userValidation,
};
