const Joi = require("joi")

const registerSchema = Joi.object({
    username:Joi.string().required().min(3).max(255),
    email:Joi.string().required().email().min(6).max(255),
    password:Joi.string().required().min(6).max(255),
})

const loginSchema = Joi.object({
    username:Joi.string().required(),
    password:Joi.string().required(),
})
module.exports = {
    registerSchema,loginSchema,
}