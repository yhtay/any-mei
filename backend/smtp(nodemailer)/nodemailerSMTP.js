const nodemailer = require("nodemailer");

// Configure Nodemailer to send the email
exports.transporter = () => {
  return nodemailer.createTransport({
    // Your email service configuration here
    service: "Gmail",
    auth: {
      user: "testkun54@gmail.com",
      pass: "qnexsctgbojiuhcb",
    },
  });
};

exports.mailOptions = (email, subject, message) => {
  return {
    from: "testkun54@gmail.com",
    to: email,
    subject: subject,
    text: message,
  };
};

exports.sendMail = (sender, mailOptions) => {
  return sender.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}