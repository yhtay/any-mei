const express = require("express");
const router = express.Router();
const resetController = require("../../controllers/auth/resetController");

// Request a email for reset
router.post("/request", resetController.request);

// Confirms the request and changes the password/updates
router.post("/confirm", resetController.confirm);

module.exports = router;
