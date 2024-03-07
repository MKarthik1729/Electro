const mongoose = require('mongoose');

// Define a schema for user data
const userSchema = new mongoose.Schema({
  firstname: String,
  secondname: String,
  email: String,
  password: String,
  phone: String
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
