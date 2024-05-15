const express = require("express");
const router = express.Router();
const usersController = require("../controllers/user.controller");
const auth = require("../auth/user.auth");

router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.post("/logout", auth, usersController.logout);
module.exports = router;
