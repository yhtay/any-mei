const auth = require("../../models/authModel");
const smptConfig = require("../../smtp(nodemailer)/nodemailerSMTP");

exports.requestReset = async (userEmail) => {
  let emailInDB = await auth.find({ email: userEmail });

  if (emailInDB) {
    const transporter = smptConfig.transporter();
    const mailOption = smptConfig.mailOptions(
      userEmail,
      "Hello This is verification",
      "Please click the link here and proceed"
    );
    const sendMail = await smptConfig.sendMail(transporter, mailOption);
    return true;
  } else {
    return false;
  }
};

exports.confirmReset = async () => {
  console.log("Working");
  return [1];
};
