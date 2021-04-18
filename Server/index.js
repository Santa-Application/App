const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { databaseURL } = require('./config/index');
// Import Routes
const {
  authRoute,
  mountainRoute,
  recruitpostRoute,
  regularpostRoute,
} = require('./routes/index');

const app = express();
// Connect to DB
mongoose.connect(
  databaseURL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  async (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Successfully linked');
  },
);

// Middleware
app.use(express.json());
app.use(cors());

// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/mountain', mountainRoute);
app.use('/api/recruitpost', recruitpostRoute);
// app.use('/api/regularpost', regularpostRoute);

// app listen
app.listen(8001, () => console.log('Server Up and running at 8001'));
