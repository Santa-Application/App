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
  profileRoute,
} = require('./routes/index');

const app = express();
// Connect to DB
mongoose.connect(
  databaseURL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
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
app.use(cors({
  exposedHeaders: ['auth-token'],
}));

// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/mountain', mountainRoute);
app.use('/api/recruitpost', recruitpostRoute);
app.use('/api/regularpost', regularpostRoute);
app.use('/api/profile', profileRoute);

// app listen
app.listen(8001, () => console.log('Server Up and running at 8001'));
