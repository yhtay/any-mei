const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth/authController");

// Get all auths
router.get("/", authController.index);

// Get a specific auth
router.get("/:id", authController.show);

// Create a new auth
router.post("/", authController.store);

// Update a auth
router.put("/:id", authController.update);

// Delete a auth
router.delete("/:id", authController.destroy);

module.exports = router;
