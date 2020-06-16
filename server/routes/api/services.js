const express = require("express");
const router = express.Router();

const Service = require("../../models/Service");

router.get("/", (req, res) => {
  Service.find()
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
});

module.exports = router;
