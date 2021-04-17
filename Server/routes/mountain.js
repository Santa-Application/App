const router = require('express').Router();
const jwt = require('jsonwebtoken');
const Mountain = require('../models/Mountain');
const { downloadFile } = require('../utils/s3');

// get all the Mountain Information
router.get('/', async (req, res) => {
  try {
    const all = await Mountain.find();
    return res.send(all);
  } catch (err) {
    return res.status(404).send(err);
  }
});

// get Mountain Information
router.get('/:mountainName', async (req, res) => {
  try {
    // find the mountain
    const result = await Mountain.findOne({ name: req.params.mountainName });
    const imageURL = await downloadFile(result.imageURL);
    console.log(result);
    return res.send({ ...result._doc, imageURL });
  } catch (err) {
    return res.status(404).send(err);
  }
});

module.exports = router;
