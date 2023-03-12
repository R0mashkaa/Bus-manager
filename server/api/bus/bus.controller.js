const busService = require('./bus.service');
const { CREATED, NO_CONTENT } = require('../../errors/error.codes');

module.exports = {
  getAllBuses: async (req, res, next) => {
    try {
      const allUsersList = await busService.getAllBuses();
      res.json(allUsersList);
    } catch (e) {
      next(e);
    }
  },

  getBusById: async (req, res, next) => {
    try {
      res.json(req.locals.bus);
    } catch (e) {
      next(e);
    }
  },

  createBus: async (req, res, next) => {
    try {
      const createdBus = await busService.createBus(req.body);
      res.status(CREATED).json(createdBus);
    } catch (e) {
      next(e);
    }
  },

  updateBus: async (req, res, next) => {
    try {
      const updatedBus = await busService.updateBus(req.params.busId, req.body);
			
      res.json(updatedBus);
    } catch (e) {
      next(e);
    }
  },

  deleteBus: async (req, res, next) => {
    try {
      await busService.deleteBus(req.params.busId);
			
      res.status(NO_CONTENT).json('Bus deleted');
    } catch (e) {
      next(e);
    }
  },
    
};
