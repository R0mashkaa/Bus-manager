const Joi = require('joi');

const { NAME_REGEXP } = require('../../configs/regexp.enum');

const joiValidatorSchema = Joi.object({
    
  busName: Joi.string().regex(NAME_REGEXP).required().error(new Error('Name is not valid'))
  // directionOut: { type: String, required: true },
  // directionIn: { type: String, required: true },
});


module.exports = {
  joiValidatorSchema
};
