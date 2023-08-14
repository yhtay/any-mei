const loginService = require("../../services/auth/loginService");

exports.login = async (req, res) => {
  try {
    const loginToken = await loginService.requestLogin(req.body);

    if (!loginToken) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ token: loginToken });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
