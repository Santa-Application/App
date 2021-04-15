const { Schema, model } = require('mongoose');

const regularPostSchema = Schema({
  publisher: { type: String, required: true },
  imageURL: { type: String, required: true },
  date: { type: Date, default: Date.now , required: true },
  content: { type: String, required: true },
  mountain: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: { types: Number, default: 0 },
});

module.exports = model('RegularPost', regularPostSchema);
