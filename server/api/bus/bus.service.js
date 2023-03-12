const Bus = require('../../modelsBase/Bus');

module.exports = {
  getAllBuses: async () => {
    return await Bus.find();
  },
  
  getSingleBus: async (busId) => {
    return await Bus.findById(busId);
  },

  findBusByParams: (searchObject) => {
    return Bus.findOne(searchObject);
  },
  
  createBus: async (busObject) => {
    return Bus.create(busObject);
  },

  updateBus: async (busId, busNewData) => {
    return Bus.findByIdAndUpdate(busId, busNewData);
  },

  deleteBus: async (busId) => {
    return Bus.findByIdAndRemove(busId);
  }
};
