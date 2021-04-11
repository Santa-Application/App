require('dotenv').config();
const fs = require('fs');
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const {
  bucketName,
  region,
  accessKey,
  secretAccessKey,
} = require('../config/index');

const s3 = new S3Client({
  region,
  accessKey,
  secretAccessKey,
});

// upload a file to s3
const uploadFile = async (file) => {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
    ContentType: 'image/jpeg',
  };

  try {
    const result = await s3.send(new PutObjectCommand(uploadParams));
    console.log(`Successfully uploaded object:${uploadParams.Bucket}/${uploadParams.Key}`);
    result.Key = file.filename;
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// download
const downloadFile = async (fileKey) => {
  const downloadParams = {
    Bucket: bucketName,
    Key: fileKey,
  };

  // Create a presigned URL
  try {
    const command = new GetObjectCommand(downloadParams);

    // Create the presigned URL
    const signedURL = await getSignedUrl(s3, command);
    return signedURL;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports.uploadFile = uploadFile;
module.exports.downloadFile = downloadFile;
