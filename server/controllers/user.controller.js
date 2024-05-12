const User = require("../models/user.model");
const { userValidation } = require("../helpers/validation");

const create = async (req, res, next) => {
  const { error } = userValidation.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: "error",
      message: "Email: 3 or more characters. Password: min. 8 characters.",
    });
  }

  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        status: "error",
        message: "Provided email already exists",
      });
    }

    const newUser = await User.create(req.body);

const responseData = {
      _id: newUser._id,
      email: newUser.email,
    };

    res.status(201).json({
      status: "success",
      data: responseData,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  create,
};
