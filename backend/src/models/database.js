const mongoose = require('mongoose');

// Define the database URI without quotes
const MONGODB_URI = 'mongodb+srv://karthikm20:12345677@cluster0.dwep78q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to the database
const mongooseConnectionPromise = mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 5000
})
.catch(err => console.log(err.reason));

module.exports = mongooseConnectionPromise;

