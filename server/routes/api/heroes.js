const express = require("express");
const router = express.Router();
const axios = require("axios");

const HomeImage = require("../../models/HomeImage");

// create homeImages from firebase data
router.get("/firebase", (req, res) => {
  axios
    .get("https://network-king-5740f.firebaseio.com/heroes.json")
    .then((response) => {
      let homeImages = response.data;
      let results = [];
      for (let id in homeImages) {
        console.log(homeImages[id]);
        results.push(homeImages[id]);
      }

      res.send(results);
      results.forEach((hero) => {
        let newHomeImage = new HomeImage(hero);
        setTimeout(() => {
          newHomeImage
            .save()
            .then((results) => {
              console.log("Saved in db");
            })
            .catch((err) => console.log(err));
        }, 100);
      });
    });
});
router.get("/", (req, res) => {
  const { refresh } = req.query;
  refresh === "true"
    ? // Find all services in mongo
      HomeImage.find()
        .select("-__v -_id")
        .then((response) => {
          let homeImageFilter = [...new Set(response)];
          axios
            .delete("https://network-king-5740f.firebaseio.com/heroes.json")
            .then((response) => {
              // Create each item in firebase
              homeImageFilter.forEach((r) => {
                axios
                  .post(
                    "https://network-king-5740f.firebaseio.com/heroes.json",
                    r
                  )
                  .then((d) => res.send(homeImageFilter))
                  .catch((err) => console.log(err));
              });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err))
    : // Return all mongo only if no refresh needed
      HomeImage.find()
        .then((r) => res.send(r))
        .catch((err) => res.send(err));
});

router.post("/", (req, res) => {
  const newHomeImage = new HomeImage(req.body);
  newHomeImage
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
