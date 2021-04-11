/* eslint-disable prettier/prettier */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
const { Schema, model } = require('mongoose');

const userSchema = Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: String,
  gender: {
    type: String,
    required: true,
  },
  // convert into age
  dateOfBirth: {
    type: Date,
    default: Date.now,
    required: true,
  },
  hikingLevel: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
  },
  favoriteMountainList: [{ type: String }],
  mountians: {
    wantTo: [
      {
        name: { type: String, required: true },
        mountainId: { type: String, required: true },
      },
    ],
    cleared: [
      {
        name: { type: String, required: true },
        mountainId: { type: String, required: true },
        clearedDate: Date,
      },
    ],
  },
  regularPosts: [String],
  recruitPosts: [String],
  followers: { type: Number, default: 0 },
  following: [String],
});

// If you want to add additional keys later, use
// the Schema#add method.

module.exports = model('User', userSchema);
