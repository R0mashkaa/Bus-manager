const apiRouter = require('express').Router();

const busRouter = require('./bus/bus.router');

apiRouter.use('/bus', busRouter);

module.exports = apiRouter;
