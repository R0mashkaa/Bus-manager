const busService = require('./bus.service');
const { joiValidatorSchema } = require('./bus.validator');
const { NotFound, BadRequest } = require('../../errors/ApiError');


module.exports = {
  getBusDynamically: (paramName, from, dbField = paramName) => async (req, res, next) => {
    try {
      const searchData = req[from][paramName];

      const bus = await busService.findBusByParams({ [dbField]: searchData });

      if (!bus) {
        throw new NotFound('User not found');
      }

      req.locals = { ...req.locals, bus };

      next();
    } catch (e) {
      next(e);
    }
  },

  createValidator: async (req, res, next) => {
    try {
      const { error } = joiValidatorSchema.validate(req.body);
	
      if(error){
        throw new BadRequest(error);
      }

      next();
    } catch (e) {
      next(e);
    }
  },
	
  distanceValidator: (directionStart, directionMinor, directionFinish) => {        
    directionStart = directionStart.split(' ')[0];
    directionFinish = directionFinish.split(' ')[0];
      
    if(directionMinor !== undefined){
      directionMinor = directionMinor.replace(/[^a-zа-я\s]/gi, '');
      directionMinor = directionMinor.replace(/\s+/g, ' ').trim();
      directionMinor = directionMinor.replace(/\s/g, '->').trim();
    
      return `${directionStart}->${directionMinor}->${directionFinish}`.trim();
    }
    else {
      return `${directionStart}->${directionFinish}`.trim();
    }
  }  
};
