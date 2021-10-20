const express = require('express');
const routes = require("./controllers");
const cors = require('cors');
require('dotenv').config();

// finish setting up router: https://w3collective.com/react-contact-form/

const PORT = process.env.PORT || 3001

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));