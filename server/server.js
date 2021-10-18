const express = require('express');
const routes = require("./controllers");
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

// finish setting up router: https://w3collective.com/react-contact-form/

const PORT = process.env.PORT || 5000

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Here we set up nodemailer with gmail.
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));