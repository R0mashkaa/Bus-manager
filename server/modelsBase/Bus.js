const mongoose = require('mongoose');
const { distanceValidator } = require('../api/bus/bus.middleware');

let dateNow = new Date();
dateNow = [dateNow.toLocaleDateString().split('T')[0]]+ ' '+
[
  dateNow.getHours() < 10 ? "0" + dateNow.getHours() : dateNow.getHours(),
  dateNow.getMinutes() < 10 ? "0" + dateNow.getMinutes() : dateNow.getMinutes()
].join(':');


const BusSchedule = new mongoose.Schema(
  {
    busName: { type: String, trim: true, required: true },
    phoneNumber: { type: String, max: 10, trim: true, required: true },
    date: { type: String, default: dateNow },
    directionStart: { type: String, trim: true, required: true },
    directionMinor: { type: String, trim: true },
    directionFinish: { type: String, trim: true, required: true }
  },
  { timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  });

BusSchedule.virtual('Full route').get(function() {
  const fullRoute = distanceValidator(this.directionStart, this.directionMinor, this.directionFinish);
  return fullRoute;
}
);

module.exports = mongoose.model('Bus', BusSchedule);
