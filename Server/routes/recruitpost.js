const router = require('express').Router();
const jwt = require('jsonwebtoken');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const { RecruitPost } = require('../models/index');
const { uploadFile, downloadFile } = require('../utils/s3');
const { route } = require('./auth');

// get all recruit posts.
router.get('/', async (req, res) => {
  try {
    const all = await RecruitPost.find();
    return res.status(200).send(all);
  } catch (err) {
    res.status(404).send(err);
  }
});

// get a individual recruit post.
router.get('/:id', async (req, res) => {
  try {
    const result = await RecruitPost.findOne({ _id: req.params.id });
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

// post new recruit post.
router.post('/newpost', async (req, res) => {
  // create a new post
  const recruitpost = new RecruitPost({
    mountainName: req.body.mountainName,
    recruitingNumber: req.body.recruitingNumber,
    recruitingLevels: req.body.recruitingLevels,
    recruitingSex: req.body.recruitingSex,
    recruitingAge: req.body.recruitingAge,
    postdate: req.body.postdate,
    description: req.body.description,
    recruiterID: req.body.recruiterID,
    recruitDate: req.body.recruitDate,
  });

  try {
    const newpost = await recruitpost.save();
    console.log(`created new post: ${newpost}`);
    res.send('post was success');
  } catch (err) {
    res.send(err);
  }
});

// change something in the existing recruiting post.
router.patch('/:id', async (req, res) => {
  try {
    // find existing document and setting update parts:)
    const update = { ...req.body };
    const updatedPost = await RecruitPost.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true },
    );

    res.status(200).send(updatedPost);
  } catch (err) {
    res.send(err);
  }
});

// Delete Recruit post.
router.delete('/:id', async (req, res) => {
  try {
    const existance = await RecruitPost.findByIdAndDelete(req.params.id);
    if (!existance) res.status(404).send('Post does not exist');

    res.status(200).send('Post was successfully deleted!');
  } catch (err) {
    res.status(400).send(err);
  }
});

// Apply to join the Recruiting.
router.patch('/:id/:applicantID', async (req, res) => {
  try {
    const { id, applicantID } = req.params;
    const update = { recruitees: applicantID };
    const result = await RecruitPost.findByIdAndUpdate(
      id,
      update,
      { new: true },
    );
    const message = {
      result,
      message: 'successfully done',
    };

    res.status(200).send(message);
  } catch {
    res.status(400).send('Cannot apply!');
  }
});
// Cancel application for recruiting.

module.exports = router;
