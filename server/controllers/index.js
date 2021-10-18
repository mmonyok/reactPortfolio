const router = require("express").Router();

const routes = require("./contactRoute");

router.use("/", routes);

module.exports = router;