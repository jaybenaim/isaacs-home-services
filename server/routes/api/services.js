const express = require("express");
const router = express.Router();
const axios = require("axios");
const fs = require("fs");
const Service = require("../../models/Service");
const cloudinary = require("cloudinary");
const { database } = require("firebase");
// remove multer
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

router.post("/upload-image", (req, res, next) => {
  const recordId = req.query.recordId;
  const values = Object.values(req.files);
  const promises = values.map((image) =>
    cloudinary.uploader.upload(image.path)
  );
  Promise.all(promises)
    .then((results) => {
      Service.findByIdAndUpdate(
        recordId,
        { image: results[0].secure_url },
        { new: true }
      )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
          res.send(err);
        });
      return res.json(results);
    })
    .catch((err) => res.status(400).json(err));
});
router.post("/upload-main-image", (req, res, next) => {
  const recordId = req.query.recordId;
  const values = Object.values(req.files);
  const promises = values.map((image) =>
    cloudinary.uploader.upload(image.path)
  );
  Promise.all(promises)
    .then((results) => {
      Service.findByIdAndUpdate(
        recordId,
        { ["details.mainImage"]: results[0].secure_url },
        { new: true }
      )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
          res.send(err);
        });
      return res.json(results);
    })
    .catch((err) => res.status(400).json(err));
});
module.exports = router;
