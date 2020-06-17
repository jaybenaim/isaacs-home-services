const express = require("express");
const router = express.Router();
const axios = require("axios");

const Service = require("../../models/Service");

// Refresh firebase db with mongo db data (used for admin updates to keep adminbro and firebase)
router.get("/", (req, res) => {
  const { refresh } = req.query;
  refresh === "true"
    ? // Find all services in mongo
      Service.find()
        .select("-__v -_id")
        .then((response) => {
          let serviceFilter = [...new Set(response)];
          axios
            .delete("https://network-king-5740f.firebaseio.com/services.json")
            .then((response) => {
              // Create each item in firebase
              serviceFilter.forEach((r) => {
                axios
                  .post(
                    "https://network-king-5740f.firebaseio.com/services.json",
                    r
                  )
                  .then((d) => res.send(serviceFilter))
                  .catch((err) => console.log(err));
              });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err))
    : // Return all mongo only if no refresh needed
      Service.find()
        .then((r) => res.send(r))
        .catch((err) => res.send(err));
});

module.exports = router;
