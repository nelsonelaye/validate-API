const joi = require("@hapi/joi")

const validateUser = (data) =>{
    const constraint = joi.object({
        name: joi.string().required().min(3).max(25),
        institution: joi.required(),
        course: joi.required()
    })

    return constraint.validate(data)
} 

module.exports.validateUser = validateUser