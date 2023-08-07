const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");

// Get all users
router.get("/", userController.index);

// Get a specific user
router.get("/:id", userController.show);

// Create a new user
router.post("/", userController.store);

// Update a user
router.put("/:id", userController.update);

// Delete a user
router.delete("/:id", userController.destroy);

module.exports = router;
