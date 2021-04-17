const { Schema, model } = require('mongoose');

const recruitPostSchema = Schema({
  mountainName: { type: String, required: true },
  recruitingNumber: { type: Number, required: true },
  recruitingLevels: [{ type: Number, required: true }],
  recruitingSex: { type: String, required: true },
  recruitingAge: { type: Array },
  date: { type: Date, default: Date.now, required: true },
  description: String,
  views: { type: Number, default: 0 },
});

module.exports = model('RecruitPost', recruitPostSchema);
