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

const logoutUser = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  loginUser,
  logoutUser,
};
