const router = require('express').Router();
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { restart } = require('nodemon');
const { RegularPost, User } = require('../models/index');
const { uploadFile, downloadFile } = require('../utils/s3');

const upload = multer({ dest: 'uploads/ ' });

// GET ALL REGULAR POSTS
router.get('/', async (req, res) => {
  // get all existing things from the db
  try {
    const all = await RegularPost.find();
    return res.status(200).send(all);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET SINGLE REGULAR POST
router.get('/:id', async (req, res) => {
  try {
    const post = await RegularPost.findById(req.params.id);

    // get publisher name and userImage
    const { name, imageURL } = await User.findById(post.publisher);
    // conver imageURL to real use imageURL
    const accessibleURL = await downloadFile(imageURL);

    const response = {
      ...post,
      name,
      accessibleURL,
    };

    return res.send(response);
  } catch (err) {
    res.status(404).send(err);
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
      publisher,
      date,
      content,
      mountain,
      title,
    } = req.body;
    const newPost = new RegularPost({
      publisher,
      imageURL: Key,
      date,
      content,
      mountain,
      title,
    });

    const savedPost = await newPost.save();
    console.log(savedPost);
    res.status(200).send('Successfully posted');
  } catch (err) {
    res.send(err);
  }
});

// CHANGE THINGS IN A REGULAR POST
router.patch('/:id', async (req, res) => {
  // find the existing document
  try {
    const result = await RegularPost.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      {
        new: true,
      },
    );

    return res.status(200).send(result);
  } catch (err) {
    res.send(err);
  }
});

// DELETE REGULAR POST
router.delete('/:id', async (req, res) => {
  try {
    const result = await Regular.findByIdAndDelete(req.params.id);
    if (!result) res.status(404).send('Post does not exist');

    res.status(200).send('Post was successfully deleted!');
  } catch (err) {
    res.status(400).send(err);
  }
});

// HIT LIKE TO A REGULAR POST
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
