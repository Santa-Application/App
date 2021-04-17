const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT,
  databaseURL: process.env.CONNECTION_URL,
  accessKey: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_ACCESS_SECRET,
  region: process.env.S3_BUCKET_REGION,
  bucketName: process.env.S3_BUCKET_NAME,
  tokenSecret: process.env.TOKEN_SECRET,
  publicAPIkey: process.env.GENERAL_KEY,
};
