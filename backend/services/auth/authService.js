// Database
const auth = require("../../models/authModel");
const bcrypt = require("bcrypt");

// nodeMailer
const { transporter, mailOptions, sendMail } = require('../../smtp(nodemailer)/nodemailerSMTP');


// CRUD Methods
exports.getAllAuths = async () => {
  return auth.find();
};

exports.getAuthById = async (id) => {
  return auth.find((user) => user.id === id);
};

exports.createAuth = async (authData) => {
  const hashPassword = await bcrypt.hash(authData.password, 10);
  const newUser = { ...authData, password: hashPassword };
  const sender = transporter()
  const options = mailOptions(newUser.email, newUser.subject, newUser.text)
  sendMail(sender, options)

  return await auth.create(newUser);
};

exports.updateAuth = async (id, authData) => {
  const index = auth.findIndex((user) => user.id === id);
  if (index !== -1) {
    auth[index] = { ...auth[index], ...authData };
    return auth[index];
  }
  return null;
};

exports.deleteAuth = async (id) => {
  const index = auth.findIndex((auth) => auth.id === id);
  if (index !== -1) {
    return auth.splice(index, 1)[0];
  }
  return null;
};
