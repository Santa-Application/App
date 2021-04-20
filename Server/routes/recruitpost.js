const router = require('express').Router();
const jwt = require('jsonwebtoken');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const { RecruitPost, User } = require('../models/index');
const { downloadFile } = require('../utils/s3');

// get all recruit posts.
router.get('/', async (req, res) => {
  try {
    const all = await RecruitPost.find();

    const response = await Promise.all(
      all.map(async (item) => {
        const { name } = await User.findById(item.recruiterID);
        const imageURL = await downloadFile(item.recruiterID);

        console.log(imageURL);
        return { ...item._doc, name, imageURL };
      }),
    );

    res.status(200).send(response);
  } catch (err) {
    res.status(404).send(err);
  }
});

// get a individual recruit post.
router.get('/:id', async (req, res) => {
  try {
    const result = await RecruitPost.findById(req.params.id);
    // get recruiterName
    const { name } = await User.findById(result.recruiterID);
    // get recruiter profile ImageURL
    const imageURL = await downloadFile(result.recruiterID);
    // get all the applicant imageURLs
    let recruitees = [];
    if (result.recruitees) {
      recruitees = result.recruitees.map(async (recruitee) => {
        const recruiteeImageURL = await downloadFile(recruitee);
        return { recruitee, recruiteeImageURL };
      });
    }
    const response = {
      ...result._doc, recruiterName: name, imageURL, recruitees,
    };
    res.status(200).send(response);
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

// Apply to join the Recruiting. => toggle?
router.post('/:id/:applicantID', async (req, res) => {
  try {
    const { id, applicantID } = req.params;

    const originalDocument = await RecruitPost.findById(id);
    const originalRecruitees = originalDocument.recruitees;

    const update = originalRecruitees.indexOf(applicantID) === -1
      ? { recruitees: [...originalRecruitees, applicantID] }
      : {
        recruitees: originalRecruitees
          .filter((originalRecruitee) => originalRecruitee !== applicantID),
      };

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
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
