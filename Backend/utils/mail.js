const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "homionapp2@gmail.com", //Change to homionapp and set in environment variable
    pass: "Homion@123",
  },
});

var mailOptions = {
  from: "Homion <homionapp2@gmail.com>",
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

exports.registerMail = (firstName, lastName, jwtToken) => {
  const mail = `
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    
    <body style="text-align: center; margin-top: 20px; font-family: Arial, Helvetica, sans-serif;">
      <h1 class="purple fw-bold" style="background-color: #e0d7d7; color: #5e2572;padding: 10px 0px; margin-bottom: 20px;">
        Homion</h1>
      <h2>Welcome!</h2>
    
      <p style="font-size: 16px; margin-top: 20px;">Hello @ ${firstName} ${lastName}</p>
      <p style="font-size: 16px; color: gray;">You have successfully created a Homion account.</p>
      <p style="font-size: 16px;">Just click below to verify your account.</p>
    
      <a href='http://localhost:9999/auth/verify/${jwtToken}'>
        <button
          style="background-color: #5e2572; border-radius: 5px; border-width: 0; color: white; font-size: 22px; padding: 5px 20px; cursor: pointer;">
          Verify Email
        </button>
      </a>
    
      <p style="font-size: 16px; color: gray; margin-bottom: 7px; margin-top: 25px;">Thanks!!</p>
      <p style="font-size: 16px; color: gray; margin: 0;">The Homion Team</p>
    
    </body>
    </html>`;

  return mail;
};

exports.resetPasswordMail = (firstName, lastName, jwtToken) => {
  const mail = `
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    
    <body style="text-align: center; margin-top: 20px; font-family: Arial, Helvetica, sans-serif;">
      <h1 class="purple fw-bold" style="background-color: #e0d7d7; color: #5e2572;padding: 10px 0px; margin-bottom: 20px;">
        Homion</h1>
    
      <p style="font-size: 16px; margin-top: 20px;">Hello @ ${firstName} ${lastName}</p>
      <p style="font-size: 16px;">Just click below to reset your password.</p>
    
      <a href='http://localhost:4200/reset-password/${jwtToken}'>
        <button
          style="background-color: #5e2572; border-radius: 5px; border-width: 0; color: white; font-size: 22px; padding: 5px 20px; cursor: pointer;">
          Reset Password
        </button>
      </a>
    
      <p style="font-size: 16px; color: gray; margin-bottom: 7px; margin-top: 25px;">Thanks!!</p>
      <p style="font-size: 16px; color: gray; margin: 0;">The Homion Team</p>
    
    </body>
    </html>`;

  return mail;
};

exports.verificationHtmlPage = (flag, email = "") => {
  const verified = `
    <h2>Verification Successfull !!</h2>
    <a href='http://localhost:4200/'>
      <button
        style="background-color: #5e2572; border-radius: 5px; border-width: 0; color: white; font-size: 22px; padding: 5px 20px; cursor: pointer;">
        Login
      </button>
    </a>`;

  const exipred = `
    <h2>Link Expired !!</h2>
    <a href='http://localhost:9999/auth/resend/${email}'>
      <button
        style="background-color: #5e2572; border-radius: 5px; border-width: 0; color: white; font-size: 22px; padding: 5px 20px; cursor: pointer;">
        Send Again
      </button>
    </a>`;

  const html = `
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body style="text-align: center; margin-top: 20px; font-family: Arial, Helvetica, sans-serif;">
      <h1 class="purple fw-bold" style="background-color: #e0d7d7; color: #5e2572;padding: 10px 0px; margin-bottom: 20px;">
        Homion
      </h1>
      ${flag ? verified : exipred}
    </body>
    </html>`;

  return html;
};
