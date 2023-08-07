// Import the required modules and dependencies
const userService = require("../services/usersService");

// Controller methods for handling user-related operations
exports.index = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

exports.show = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user" });
  }
};

exports.store = async (req, res) => {
  const userData = req.body;
  try {
    const newUser = await userService.createUser(userData);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Error creating user" });
  }
};

exports.update = async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  try {
    const updatedUser = await userService.updateUser(userId, userData);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Error updating user" });
  }
};

exports.destroy = async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await userService.deleteUser(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ message: "Error deleting user" });
  }
};
