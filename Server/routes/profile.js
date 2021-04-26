const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { downloadFile } = require('../utils/s3');

router.get('/:id', async (req, res) => {
  // find User
  try {
    const userInfo = await User.findById(req.params.id);

    // get imageURL of the user
    const { imageURL } = userInfo;
    const profileImageURL = await downloadFile(imageURL);
    const response = { ...userInfo._doc, profileImageURL };

    delete response.password;

    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

router.get('/name/:name', async (req, res) => {
  try {
    const userInfo = await User.findOne({ name: req.params.name });

    // get imageURL of the user
    const { imageURL } = userInfo;
    const profileImageURL = await downloadFile(imageURL);
    const response = { ...userInfo._doc, profileImageURL };
    delete response.password;

    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

router.get('/email/:email', async (req, res) => {
  try {
    const userInfo = await User.findOne({ email: req.params.email });

    // get imageURL of the user
    const { imageURL } = userInfo;
    const profileImageURL = await downloadFile(imageURL);
    const response = { ...userInfo._doc, profileImageURL };
    delete response.password;

    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
