const express = require("express");
const router = express.Router();
const loginController = require("../../controllers/auth/loginController");

// Create a new login
router.post("/", loginController.login);

module.exports = router;
