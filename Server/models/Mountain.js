const { Schema, model } = require('mongoose');

const mountainSchema = Schema({
  imageURL: { type: String, required: true },
  key: { type: String, required: true },
  name: { type: String, required: true },
  elevation: { type: String, required: true },
  mountainID: { type: String, required: true },
  responsibles: String,
  location: String,
  address: String,
  description: String,
  likes: Number,
  climbers: Number,
});

module.exports = model('Mountain', mountainSchema);
