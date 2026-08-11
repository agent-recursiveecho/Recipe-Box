const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('Recipe Box connected to MongoDB Atlas.');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = {
  connect
};
