const { Schema, model } = require('mongoose');

const regularPostSchema = Schema({
  publisherId: { type: String, required: true },
  publisherName: { type: String, required: true },
  postingDate: { type: Date, default: Date.now , required: true },
  views: { type: Number, default: 0 },
  likes: { types: Number, default: 0 },
  mountainName: { type: String, required: true },
  imageURL: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = model('RegularPost', regularPostSchema);
