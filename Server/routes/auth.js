/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../utils/validation');
const { uploadFile, downloadFile } = require('../utils/s3');

const upload = multer({ dest: 'uploads' });

// REGISTER
router.post('/register', upload.single('imageURL'), async (req, res) => {
  // Validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email already exists');

  const nameExist = await User.findOne({ name: req.body.name });
  if (nameExist) return res.status(400).send('닉네임이 존재합니다.');

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // generate imageURL(or just image Key)
  const { file } = req;
  const { Key } = await uploadFile(file);

  // Create a new User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    hikingLevel: req.body.hikingLevel,
    imageURL: Key,
    introduction: req.body.introduction,
  });

  try {
    const savedUser = await user.save();
    // generate a token(for immediate login)
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    // get imageURL
    const userImageURL = await downloadFile(savedUser.imageURL);
    const response = { ...savedUser._doc, imageURL: userImageURL };

    delete response.password;
    res.set('auth-token', token).send(response);
  } catch (err) {
    res.status(400).send({ err, message: 'error' });
  }
});

// LOGIN
router.post('/signin', async (req, res) => {
  // Validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('등록된 이메일이 아닙니다.');

  // passwrod check
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('비밀번호가 올바르지 않습니다. 다시한번 확인해주세요');

  // Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  // get imageURL
  const userImageURL = user.imageURL ? await downloadFile(user.imageURL) : '유저 이미지가 없습니다.';
  const response = { ...user._doc, imageURL: userImageURL };

  delete response.password;
  res.set('auth-token', token).send(response);
});

// SIGN OUT
router.post('/signout', async (req, res) => {
  try {
    res.send('signed out!');
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
