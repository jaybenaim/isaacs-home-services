const express = require("express");
const router = express.Router();

const Service = require("../../models/Service");

router.get("/", (req, res) => {
  res.send("service route ");
});
module.exports = router;
