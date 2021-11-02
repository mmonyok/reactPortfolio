const express = require('express');
const routes = require("./controllers");
const cors = require('cors');
const app = express();
const path = require('path');
require('dotenv').config();

// finish setting up router: https://w3collective.com/react-contact-form/

const PORT = process.env.PORT || 3001

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));