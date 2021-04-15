const { Schema, model } = require('mongoose');

const recruitPostSchema = Schema({
  publisherId: { type: String, required: true },
  publisherName: { type: String, required: true },
  postingDate: { type: Date, default: Date.now, required: true },
  views: { type: Number, default: 0 },
  mountainName: { type: String, required: true },
  recruitingDate: { type: Date, required: true },
  recruitingLevels: [{ type: String, required: true }],
  recruitingGender: { type: String, required: true },
  recruitingAge: { type: Number, required: true },
  recruitingNumber: { type: Number, required: true },
  description: String,
});

module.exports = model('RecruitPost', recruitPostSchema);
