const auth = require("../../models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.requestLogin = async (authData) => {
  const { username, password } = authData;
  const user = await auth.findOne({ username });

  if (!user) {
    return null;
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return null;
  }

  // Create JWT token
  // Instead of user_id -- connect it to userId that is created on register
  const token = jwt.sign({ userId: user._id }, "secret_key", {
    expiresIn: "1h",
  });

  return token;
};
