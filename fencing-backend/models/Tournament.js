const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Tournament = new Schema({
  name: String,
  start: String,
  end: String,
  location: String,
  host: String,
  venue: String,
  deadline: String,
  status: String,
  junior: String,
  d1a: String,
  d2: String,
  d3: String,
});

// Compile model from schema
module.exports = mongoose.model("Tournament", Tournament);
