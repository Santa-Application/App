/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
const { Mountain, RegularPost, RecruitPost } = require('../models/index');
const { downloadFile } = require('../utils/s3');

// const jwt = require('jsonwebtoken');

// get all the Mountain Information
router.get('/', async (_, res) => {
  try {
    const all = await Mountain.find();

    const response = await Promise.all(
      all.map(async (data) => {
        const imageURL = await downloadFile(data.imageURL);

        return { data, imageURL };
      }),
    );

    return res.send(response);
  } catch (err) {
    return res.status(404).send(err);
  }
});

// get Mountain Information => overviews
router.get('/:mountainName', async (req, res) => {
  try {
    // find the mountain
    const result = await Mountain.findOne({ name: req.params.mountainName });
    const imageURL = await downloadFile(result.imageURL);

    return res.send({ ...result._doc, imageURL });
  } catch (err) {
    return res.status(404).send(err);
  }
});

// get Mountain Reviews
router.get('/:mountainName/reviews', async (req, res) => {
  // find all reviews with the mountain:)
  try {
    const allPosts = await RegularPost.find({ mountain: req.params.mountainName });
    // for all regularPosts, get a limited URL that is accessible
    // and put it in the payload and send
    const datas = await Promise.all(

      allPosts.map(async (post) => {
        const imageURL = await downloadFile(post.imageURL);
        return { post, imageURL };
      }),
    );

    res.status(200).send(datas);
  } catch (err) {
    res.send(err);
  }
});

// get Mountain Recruits
router.get('/:mountainName/recruits', async (req, res) => {
  try {
    const allPosts = await RecruitPost.find({ mountainName: req.params.mountainName });

    const datas = await Promise.all(
      allPosts.map(async (post) => {
        // recruit post publisher imageURL
        const recruiterProfileImageURL = await downloadFile(post.recruiterID);
        return { post, recruiterProfileImageURL };
      }),
    );

    res.status(200).send(datas);
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
