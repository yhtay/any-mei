// Import the required modules and dependencies
const authService = require("../../services/auth/authService");

// Controller methods for handling auth-related operations
exports.index = async (req, res) => {
  try {
    const auths = await authService.getAllAuths();
    res.json(auths);
  } catch (err) {
    res.status(500).json({ message: "Error fetching auths" });
  }
};

exports.show = async (req, res) => {
  const authId = req.params.id;
  try {
    const auth = await authService.getAuthById(authId);
    if (!auth) {
      return res.status(404).json({ message: "auth not found" });
    }
    res.json(auth);
  } catch (err) {
    res.status(500).json({ message: "Error fetching auth" });
  }
};

exports.store = async (req, res) => {
  const authData = req.body;
  try {
    const newauth = await authService.createAuth(authData);
    res.status(201).json(newauth);
  } catch (err) {
    res.status(500).json({ message: "Error creating auth" });
  }
};

exports.update = async (req, res) => {
  const authId = req.params.id;
  const authData = req.body;
  try {
    const updatedauth = await authService.updateAuth(authId, authData);
    if (!updatedauth) {
      return res.status(404).json({ message: "auth not found" });
    }
    res.json(updatedauth);
  } catch (err) {
    res.status(500).json({ message: "Error updating auth" });
  }
};

exports.destroy = async (req, res) => {
  const authId = req.params.id;
  try {
    const deletedauth = await authService.deleteAuth(authId);
    if (!deletedauth) {
      return res.status(404).json({ message: "auth not found" });
    }
    res.json(deletedauth);
  } catch (err) {
    res.status(500).json({ message: "Error deleting auth" });
  }
};
