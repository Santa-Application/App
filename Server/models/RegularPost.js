const { Schema, model } = require('mongoose');

const regularPostSchema = Schema({
  publisherID: { type: String, required: true },
  imageURL: { type: String, required: true },
  postDate: { type: Date, default: Date.now, required: true },
  content: { type: String, required: true },
  mountainName: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: { types: Number, default: 0 },
  title: { type: String },
});

module.exports = model('RegularPost', regularPostSchema);
