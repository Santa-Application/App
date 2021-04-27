const { Schema, model } = require('mongoose');

const recruitPostSchema = Schema({
  mountainName: { type: String, required: true },
  recruitingNumber: { type: Number, required: true },
  hikingLevel: { type: String, required: true },
  recruitingGender: { type: String, required: true },
  recruitingAge: { type: Array },
  postDate: { type: Date, default: Date.now, required: true },
  description: String,
  views: { type: Number, default: 0 },
  publisherID: { type: String, required: true },
  recruitees: [{ type: String }],
  recruitDate: { type: Date, required: true },
  title: { type: String, required: true },
});

module.exports = model('RecruitPost', recruitPostSchema);
