const express = require("express");
const router = express.Router();
const axios = require("axios");
const Hero = require("../../models/Hero");

router.get("/", (req, res) => {
  const { refresh } = req.query;
  refresh === "true"
    ? // Find all services in mongo
      Hero.find()
        .select("-__v -_id")
        .then((response) => {
          let heroFilter = [...new Set(response)];
          axios
            .delete("https://network-king-5740f.firebaseio.com/heroes.json")
            .then((response) => {
              // Create each item in firebase
              heroFilter.forEach((r) => {
                axios
                  .post(
                    "https://network-king-5740f.firebaseio.com/heroes.json",
                    r
                  )
                  .then((d) => res.send(heroFilter))
                  .catch((err) => console.log(err));
              });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err))
    : // Return all mongo only if no refresh needed
      Hero.find()
        .then((r) => res.send(r))
        .catch((err) => res.send(err));
});

router.post("/", (req, res) => {
  const newHero = new Hero(req.body);
  newHero
    .save()
    .then((response) => {
      axios
        .post("https://network-king-5740f.firebaseio.com/heroes.json", response)
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
