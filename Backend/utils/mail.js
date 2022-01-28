const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "homionapp2@gmail.com",   //Change to homionapp and set in environment variable
    pass: "Homion@123",
  },
});

var mailOptions = {
  from: "homionapp2@gmail.com"
};

exports.setMailOptions = (to, subject, html) => {
  mailOptions.to = to;
  mailOptions.subject = subject;
  mailOptions.html = html;
};

exports.sendMail = () => {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
