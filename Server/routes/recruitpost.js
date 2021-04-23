/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
// const jwt = require('jsonwebtoken');

const { RecruitPost, User } = require('../models/index');
const { downloadFile } = require('../utils/s3');

// get all recruit posts.
router.get('/', async (_, res) => {
  try {
    const all = await RecruitPost.find();

    const response = await Promise.all(
      all.map(async (recruitPost) => {
        const publisherInfo = await User.findById(recruitPost.publisherID);
        const imageURL = await downloadFile(publisherInfo.imageURL);
        let recruitees = [];

        if (recruitPost.recruitees) {
          recruitees = await Promise.all(
            recruitPost.recruitees.map(async (recruitee) => {
              const recruiteeImageURL = await downloadFile(recruitee);
              return { recruitee, recruiteeImageURL };
            }),
          );
        }

        return {
          recruitPost, publisherInfo, imageURL, recruitees,
        };
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
    const recruitPost = await RecruitPost.findById(req.params.id);
    // get recruiterName
    const publisherInfo = await User.findById(recruitPost.publisherID);
    // get recruiter profile ImageURL
    const imageURL = await downloadFile(publisherInfo.imageURL);
    // get all the applicant imageURLs
    let recruitees = [];

    if (recruitPost.recruitees) {
      recruitees = await Promise.all(
        recruitPost.recruitees.map(async (recruitee) => {
          const recruiteeImageURL = await downloadFile(recruitee);
          return { recruitee, recruiteeImageURL };
        }),
      );
    }

    const response = {
      recruitPost, publisherInfo, imageURL, recruitees,
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
    hikingLevel: req.body.hikingLevel,
    recruitingGender: req.body.recruitingGender,
    recruitingAge: req.body.recruitingAge,
    postDate: req.body.postdate,
    description: req.body.description,
    publisherID: req.body.publisherID,
    recruitDate: req.body.recruitDate,
    title: req.body.title,
  });

  try {
    const recruitPost = await recruitpost.save();
    const publisherInfo = await User.findById(recruitPost.publisherID);
    const imageURL = await downloadFile(publisherInfo.imageURL);
    const recruitees = [];

    const response = {
      recruitPost,
      publisherInfo,
      imageURL,
      recruitees,
    };

    res.status(200).send(response);
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
    const publisherInfo = await User.findById(updatedPost.publisherID);
    const imageURL = await downloadFile(publisherInfo.imageURL);
    let recruitees = [];
    if (updatedPost.recruitees) {
      recruitees = Promise.all(
        updatedPost.recruitees.map(async (recruitee) => {
          const recruiteeImageURL = await downloadFile(recruitee);
          return { recruitee, recruiteeImageURL };
        }),
      );
    }

    const response = {
      recruitPost: updatedPost,
      publisherInfo,
      imageURL,
      recruitees,
    };

    res.status(200).send(response);
  } catch (err) {
    res.send(err);
  }
});

// Delete Recruit post.
router.delete('/:id', async (req, res) => {
  try {
    const existance = await RecruitPost.findByIdAndDelete(req.params.id);
    if (!existance) res.status(404).send('Post does not exist');

    res.status(200).send(req.params.id);
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

    let recruitees = [];
    recruitees = Promise.all(
      result.recruitees.map(async (recruitee) => {
        const recruiteeImageURL = await downloadFile(recruitee);
        return { recruitee, recruiteeImageURL };
      }),
    );

    res.status(200).send(recruitees);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
