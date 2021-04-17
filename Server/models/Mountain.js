const { Schema, model } = require('mongoose');

const mountainSchema = Schema({
  imageURL: { type: String },
  name: { type: String, required: true },
  elevation: { type: String, required: true },
  mountainID: { type: String, required: true },
  responsibles: String,
  address: String,
  description: String,
  likes: { type: Number, default: 0 },
  reviewers: { type: Number, default: 0 },
});

module.exports = model('Mountain', mountainSchema);
