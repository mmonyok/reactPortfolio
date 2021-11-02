const router = require("express").Router();

const routes = require("./contactRoute");

router.use("/contact", routes);

module.exports = router;