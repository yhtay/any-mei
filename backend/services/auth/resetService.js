const nodemailer = require("nodemailer");
const auth = require("../../models/authModel");

exports.requestReset = async (email) => {
  const emailData = {
    subject: "Hello This is verification",
    text: "Please click the link here and proceed",
  };

  // Configure Nodemailer to send the email
  const transporter = nodemailer.createTransport({
    // Your email service configuration here
    service: "Gmail",
    auth: {
      user: "testkun54@gmail.com",
      pass: "qnexsctgbojiuhcb",
    },
  });

  const mailOptions = {
    from: "testkun54@gmail.com",
    to: email,
    subject: emailData.subject,
    text: emailData.message,
  };

  const info = await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  console.log(email, info);
  console.log("Working");
  return info;
};

exports.confirmReset = async () => {
  console.log("Working");
  return [1];
};
