require("dotenv").config();
const nodemailer = require("nodemailer");

// To use SMTP system all three functions must be implemented, along with it's argument passed

// Configure Nodemailer to send the email (sender)
exports.transporter = () => {
  return nodemailer.createTransport({
    // Your email service configuration here
    service: "Gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: proces.env.SMTP_APP_PASS,
    },
  });
};

/**
 * Creating a default mailOptions that will send the email subject to the receiver
 * @param {*} email Email of the receivers (MUST)
 * @param {*} subject Subject of the mail (MUST)
 * @param {*} message Message of the mail (MUST)
 * @returns Returns the format of the how the mailOptions should be
 */
exports.mailOptions = (email, subject, message) => {
  return {
    from: "testkun54@gmail.com",
    to: email,
    subject: subject,
    text: message,
  };
};

/**
 * Configuration to send actually email to the receiver
 * @param {*} sender Transporter functions configuration (MUST)
 * @param {*} mailOptions Mail Options configuration (MUST)
 * @returns
 */
exports.sendMail = (sender, mailOptions) => {
  return sender.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
