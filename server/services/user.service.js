const User = require("../models/user.model");

const createUser = async (userData) => {
  return User.create(userData);
};

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

const loginUser = async (email) => {
  return User.findOne({ email });
};

module.exports = {
  createUser,
  getUserByEmail,
  loginUser,
};
