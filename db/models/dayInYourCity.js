const mongoose = require("mongoose");

const dayInYourCity = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  desc: { type: String, required: true },
  cost: { type: Number, required: true },
  numOfOrders: { type: Number },
  expiryDate: { type: Date, min: "2000-01-01", required: true },
  timeStart: { type: Number, required: true },
  timeFinish: { type: Number, required: true },
  catg: { type: String, required: true, trim: true },
  reviews: { type: Number, default: 0 },
  isItSuitableForFamily: { type: Boolean, default: true },
  isDel: { type: Boolean, default: false },
});

module.exports = mongoose.model("dayInYourCity", dayInYourCity);
