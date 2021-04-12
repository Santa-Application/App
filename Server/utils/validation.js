const Joi = require('joi');

// Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(8).required(),
    gender: Joi.string().required(),
    dateOfBirth: Joi.date().required(),
    hikingLevel: Joi.string().required(),
  });

  return schema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(data);
};

// User Mountain information validation
const userMountainValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    mountainId: Joi.string().required(),
    clearDate: Joi.date(),
  });

  return schema.validate(data);
};

// Mountain data validation
const mountainValidation = (data) => {
  const schema = Joi.object({
    imageURL: Joi.string().required(),
    name: Joi.string().required(),
    elevation: Joi.string().required(),
    mountainID: Joi.string().required(),
    responsibles: Joi.string,
    location: Joi.string,
    address: Joi.string,
    description: Joi.string,
    likes: Joi.number,
    climbers: Joi.number,
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.userMountainValidation = userMountainValidation;
module.exports.mountainValidation = mountainValidation;
