const router = require('express').Router();
const multer = require('multer');
const { RegularPost, User } = require('../models/index');
const { uploadFile, downloadFile } = require('../utils/s3');
// const jwt = require('jsonwebtoken');
// const { restart } = require('nodemon');

const upload = multer({ dest: 'uploads/ ' });

// GET ALL REGULAR POSTS
router.get('/', async (_, res) => {
  try {
    const all = await RegularPost.find();
    const responseData = await Promise.all(
      all.map(async (regularPost) => {
        const publisherInfo = await User.findById(regularPost.publisherID);
        const publisherImageURL = await downloadFile(publisherInfo.imageURL);

        return {
          regularPost,
          publisherInfo,
          publisherImageURL,
        };
      }),
    );
    return res.status(200).send(responseData);
  } catch (err) {
    return res.status(400).send(err);
  }
});

// GET SINGLE REGULAR POST
router.get('/:id', async (req, res) => {
  try {
    const regularPost = await RegularPost.findById(req.params.id);
    // get publisher name and userImage
    const publisherInfo = await User.findById(regularPost.publisher);
    // conver imageURL to real use imageURL
    const publisherImageURL = await downloadFile(publisherInfo.imageURL);

    const response = {
      regularPost,
      publisherInfo,
      publisherImageURL,
    };

    return res.send(response);
  } catch (err) {
    return res.status(404).send(err);
  }
});

// POST A REGULAR POST
router.post('/newpost', upload.single('image'), async (req, res) => {
  // generate imageURL(or just image Key)
  const { file } = req;
  const { Key } = await uploadFile(file);

  // Create a new post
  try {
    const {
      publisherID,
      postDate,
      content,
      mountainName,
      title,
    } = req.body;

    const newPost = new RegularPost({
      publisherID,
      imageURL: Key,
      postDate,
      content,
      mountainName,
      title,
    });

    const publisherInfo = await User.findById(publisherID);
    const publisherImageURL = await downloadFile(publisherInfo.imageURL);

    const regularPost = await newPost.save();
    const response = { regularPost, publisherInfo, publisherImageURL };

    res.status(200).send(response);
  } catch (err) {
    res.send(err);
  }
});

// CHANGE THINGS IN A REGULAR POST
router.patch('/:id', async (req, res) => {
  // find the existing document
  try {
    const regularPost = await RegularPost.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      {
        new: true,
      },
    );

    const publisherInfo = await User.findById(regularPost.publisherID);
    const publisherImageURL = await downloadFile(publisherInfo.imageURL);

    const response = {
      regularPost,
      publisherInfo,
      publisherImageURL,
    };

    return res.status(200).send(response);
  } catch (err) {
    return res.send(err);
  }
});

// DELETE REGULAR POST
router.delete('/:id', async (req, res) => {
  try {
    const result = await RegularPost.findByIdAndDelete(req.params.id);
    if (!result) res.status(404).send(result);

    res.status(200).send('Post was successfully deleted!');
  } catch (err) {
    res.status(400).send(err);
  }
});

// HIT LIKE TO A REGULAR POST(NOT YET)
router.patch('/:id/like', async (req, res) => {
  try {
    // GET the user's ID and Update User table
    const postID = req.params.id;
    const userID = req.body.id;
    const { likedRegularPosts } = User.findById(userID);

    let update = {};
    let updatedPost = {};
    const options = { new: true };

    if (likedRegularPosts.indexOf(req.params.id) === -1) {
      update = {
        likedRegularPosts: [...likedRegularPosts, req.params.id],
      };

      const originalLikes = await RegularPost.findById(req.params.id).likes;
      const postUpdate = { likes: originalLikes + 1 };

      updatedPost = await RegularPost.findByIdAndUpdate(
        postID,
        postUpdate,
        options,
      );
    } else {
      update = {
        likedRegularPosts: likedRegularPosts
          .filter((likedRegularPost) => likedRegularPost !== req.params.id),
      };

      const originalLikes = await RegularPost.findById(req.params.id).likes;
      const postUpdate = { likes: originalLikes - 1 };

      updatedPost = await RegularPost.findByIdAndUpdate(
        postID,
        postUpdate,
        options,
      );
    }

    const result = await User.findByIdAndUpdate(userID, update, options);

    res.status(200).send({ updatedPost, result });
    //
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
