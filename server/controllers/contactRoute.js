const router = require("express").Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// Here we set up nodemailer with gmail.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.PASS,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    setAccessType: "offline"
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

router.post("/send", function (req, res) {
  let mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: `Portfolio message from ${req.body.name}!`,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "Failed to send email.",
      });
      console.log(err);
    } else {
      console.log("Email sent successfully.");
      res.json({
        status: "Email sent successfully."
      });
    }
  });
});

module.exports = router;