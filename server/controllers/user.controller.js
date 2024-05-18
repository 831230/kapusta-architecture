
const userService = require("../services/user.service");
const { userValidation } = require("../helpers/validation");

const register = async (req, res, next) => {

  const { error } = userValidation.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: "error",
      message: "Email: 3 or more characters. Password: min. 8 characters.",
    });
  }

  try {
    const { email } = req.body;

    const existingUser = await userService.getUserByEmail(email);

    if (existingUser) {
      return res.status(409).json({
        status: "error",
        message: "Provided email already exists",
      });
    }


    const newUser = await userService.createUser(req.body);

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

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userService.loginUser(email, password);

  if (!user) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: "User not found",
      data: "Bad request",
    });
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      email: user.email,
      balance: user.balance,
      id: user.id,
    },
  });
};

module.exports = {
  register,
  login,

};
