const isAuth = (req, res, next) => {
  if (req.isAuth()) {
    return next();
  }
  return res.status(401).json({ message: "Unauthorized" });
};

module.exports = isAuth;
