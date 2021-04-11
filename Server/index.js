const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { databaseURL } = require('./config/index');
// Import Routes
const {
  authRoute,
} = require('./routes/index');

const app = express();
// Connect to DB
mongoose.connect(
  databaseURL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  async (err) => {
    if (err) throw err;
    console.log('Successfully linked');
  },
);

// Middleware
app.use(express.json());
app.use(cors());

// Route Middlewares
app.use('/api/user', authRoute);

// app listen
app.listen(8001, () => console.log('Server Up and running'));
