// Import the required modules and dependencies
const resetService = require("../services/resetService");

// Controller methods for handling user-related operations
exports.request = async (req, res) => {
  return resetService.requestReset;
};

exports.confirm = async (req, res) => {
  console.log("Working");
  let val = resetService.confirmReset();
  console.log(val);
  return res.json(val);
};
