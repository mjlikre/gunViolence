const mongoose = require('mongoose');
const mongoDB = require('../../config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

var connection = mongoose.connection;

module.exports = connection;