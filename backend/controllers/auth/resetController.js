// Import the required modules and dependencies
const resetService = require("../../services/auth/resetService");

// Controller methods for handling user-related operations
exports.request = async (req, res) => {
  let request = await resetService.requestReset(req.body.email);
  console.log(request);
  if (request) {
    console.log("Sucess");
    return res.json("Processed");
  } else {
    return res.json("Error");
  }
};

exports.confirm = async (req, res) => {
  console.log("Working");
  let val = resetService.confirmReset();
  console.log(val);
  return res.json(val);
};
