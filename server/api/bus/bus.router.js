const busRouter = require('express').Router();

const controller = require('./bus.controller');
// const busMdlwr = require('./bus.middleware');

busRouter.get('/', controller.getAllBuses);
busRouter.post('/', controller.createBus);

// busRouter.use('/:busId', busMdlwr.getBusDynamically('busId','params','_id'));
busRouter.get('/:busId', controller.getBusById);
busRouter.put('/:busId', controller.updateBus);
busRouter.delete('/:busId', controller.deleteBus);


module.exports = busRouter;
