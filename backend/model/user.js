const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  apiKey: String
});

const User = mongoose.model('User', userSchema);

User.create = async (newUser) => {
  try {
    const createdUser = await User.create(newUser);
    console.log('Created new user:', createdUser);
    return createdUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

User.authenticateKey = async (apiKey) => {
  try {
    const user = await User.findOne({ apiKey });
    const apiKeyExists = !!user;
    return apiKeyExists;
  } catch (error) {
    console.error('Error authenticating API key:', error);
    throw error;
  }
};

module.exports = User;