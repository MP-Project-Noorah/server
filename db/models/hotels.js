const mongoose = require("mongoose");

const hotels = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  desc: { type: String, required: true },
  imges: { type: Array, required: true },
  map: { type: String, required: true },
  moreInfo: { type: String, required: true },
  Reviews: { type: Number, required: true },
  isDel: { type: Boolean, default: false },
});

module.exports = mongoose.model("hotels", hotels);