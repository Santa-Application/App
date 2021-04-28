/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
const { response } = require('express');
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
        const publisherImageURL = await downloadFile(publisherInfo.imageURL);
        let recruitees = [];

        if (recruitPost.recruitees) {
          recruitees = await Promise.all(
            recruitPost.recruitees.map(async (recruitee) => {
              const recruiteeInfo = await User.findById(recruitee);
              const recruiteeName = recruiteeInfo.name;
              const recruiteeImageURL = await downloadFile(recruitee);
              return { recruiteeId: recruitee, recruiteeImageURL, recruiteeName };
            }),
          );
        }

        delete publisherInfo.password;

        const data = {
          recruitPost: {
            ...recruitPost._doc,
            recruitees,
          },
          publisherInfo: {
            ...publisherInfo._doc,
            imageURL: publisherImageURL,
          },
        };

        return data;
      }),
    );

    const sortedResponse = [...response].sort((a, b) => b.recruitPost.postDate - a.recruitPost.postDate);
    res.status(200).send(sortedResponse);
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
    const publisherImageURL = await downloadFile(publisherInfo.imageURL);
    // get all the applicant imageURLs
    let recruitees = [];

    if (recruitPost.recruitees) {
      recruitees = await Promise.all(
        recruitPost.recruitees.map(async (recruitee) => {
          const recruiteeInfo = await User.findById(recruitee);
          const recruiteeName = recruiteeInfo.name;
          const recruiteeImageURL = await downloadFile(recruitee);
          return { recruiteeId: recruitee, recruiteeImageURL, recruiteeName };
        }),
      );
    }

    delete publisherInfo.password;

    const response = {
      recruitPost: {
        ...recruitPost._doc,
        recruitees,
      },
      publisherInfo: {
        ...publisherInfo._doc,
        imageURL: publisherImageURL,
      },
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
    postDate: req.body.postDate,
    description: req.body.description,
    publisherID: req.body.publisherID,
    recruitDate: req.body.recruitDate,
    title: req.body.title,
  });

  try {
    const recruitPost = await recruitpost.save();

    const { _id } = recruitPost;
    await User.findByIdAndUpdate(req.body.publisherID, { recruitPosts: _id });

    const publisherInfo = await User.findById(recruitPost.publisherID);
    const publisherImageURL = await downloadFile(publisherInfo.imageURL);

    // const recruitees = [];

    delete publisherInfo.password;

    const response = {
      recruitPost,
      publisherInfo: {
        ...publisherInfo._doc,
        imageURL: publisherImageURL,
      },
    };

    res.status(200).send(response);
  } catch (err) {
    res.send(err);
  }
});

// change something in the existing recruiting post.
// not changed yet.
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
    const publisherImageURL = await downloadFile(publisherInfo.imageURL);
    let recruitees = [];
    if (updatedPost.recruitees) {
      recruitees = Promise.all(
        updatedPost.recruitees.map(async (recruitee) => {
          const recruiteeInfo = await User.findById(recruitee);
          const recruiteeName = recruiteeInfo.name;
          const recruiteeImageURL = await downloadFile(recruitee);
          return { recruiteeId: recruitee, recruiteeImageURL, recruiteeName };
        }),
      );
    }

    delete publisherInfo.password;

    const response = {
      recruitPost: {
        ...updatedPost._doc,
        recruitees,
      },
      publisherInfo: {
        ...publisherInfo._doc,
        imageURL: publisherImageURL,
      },
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

    const publisherInfo = await User.findById(result.publisherID);
    const publisherImageURL = await downloadFile(publisherInfo.imageURL);

    let recruitees = [];
    recruitees = await Promise.all(
      result.recruitees.map(async (recruitee) => {
        const recruiteeInfo = await User.findById(recruitee);
        const recruiteeName = recruiteeInfo.name;
        const recruiteeImageURL = await downloadFile(recruitee);
        return { recruiteeId: recruitee, recruiteeImageURL, recruiteeName };
      }),
    );

    // add to applicant appliedRecruitPosts
    const updatedUserInfo = await User.findByIdAndUpdate(
      applicantID,
      {
        appliedRecruitsPosts: id,
      },
      { new: true },
    );

    if (!updatedUserInfo) res.status(400).send('Could not save to update the user appliedRecruitsposts');

    const response = {
      recruitPost: {
        ...result._doc,
        recruitees,
      },
      publisherInfo: {
        ...publisherInfo._doc,
        imageURL: publisherImageURL,
      },
    };

    res.status(200).send(recruitees);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
