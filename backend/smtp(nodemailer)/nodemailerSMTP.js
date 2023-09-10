require("dotenv").config();
const nodemailer = require("nodemailer");

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
 * @param {*} email Email of the receivers
 * @param {*} subject Subject of the mail
 * @param {*} message Message of the mail
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
 * @param {*} sender Transporter functions configuration
 * @param {*} mailOptions Mail Options configuration
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
