const express = require("express");
const router = express.Router();
const axios = require("axios");
const Event = require("../../models/Event");

router.get("/", (req, res) => {
  const { refresh } = req.query;
  refresh === "true"
    ? // Find all services in mongo
      Event.find()
        .select("-__v -_id")
        .then((response) => {
          let eventFilter = [...new Set(response)];
          axios
            .delete("https://network-king-5740f.firebaseio.com/events.json")
            .then((response) => {
              // Create each item in firebase

              eventFilter.forEach((r) => {
                setTimeout(() => {
                  axios
                    .post(
                      "https://network-king-5740f.firebaseio.com/events.json",
                      r
                    )
                    .then((d) => res.send(eventFilter))
                    .catch((err) => console.log(err));
                }, 100);
              });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err))
    : // Return all mongo only if no refresh needed
      Event.find()
        .then((r) => res.send(r))
        .catch((err) => res.send(err));
});

router.post("/", (req, res) => {
  const newEvent = new Event(req.body);
  newEvent

    .save()
    .then((response) => {
      axios
        .post("https://network-king-5740f.firebaseio.com/events.json", response)
        .then((results) => {
          console.log(results);
          return res.send(results);
        })
        .catch((err) => {
          res.send(err);
        });
    })
    .catch((err) => res.send(err));
});

module.exports = router;
