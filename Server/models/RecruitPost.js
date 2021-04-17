const { Schema, model } = require('mongoose');

const recruitPostSchema = Schema({
  mountainName: { type: String, required: true },
  recruitingNumber: { type: Number, required: true },
  recruitingLevels: [{ type: String, required: true }],
  recruitingSex: { type: String, required: true },
  recruitingAge: { type: Array },
  postdate: { type: Date, default: Date.now, required: true },
  description: String,
  views: { type: Number, default: 0 },
  recruiterID: { type: String, required: true },
  reruitees: [{ type: String }],
  recruitDate: { type: String, required: true },
});

module.exports = model('RecruitPost', recruitPostSchema);
