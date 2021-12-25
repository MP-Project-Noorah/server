const mongoose = require("mongoose");

const users = new mongoose.Schema({
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  fav: { type: Array, required: false },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "role" },
  isDel: { type: Boolean, required: true, default: false },
});

module.exports = mongoose.model("users", users);
