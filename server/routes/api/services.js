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

          let serviceFilter = [];

          for (const service of response) {
            console.log(service)
            !serviceFilter.includes(service) && serviceFilter.push(service)
          }

          try {
            axios.delete("https://network-king-5740f.firebaseio.com/services.json")
            // Create each item in firebase
              serviceFilter.forEach((r) => {
                setTimeout(() => {}, 300)
                axios
                  .post(
                    "https://network-king-5740f.firebaseio.com/services.json",
                    r
                  )
              });
            res.send(serviceFilter)
          } catch (err) {
            console.log(err)
            res.send(err)
          }

        })
    : // Return all mongo only if no refresh needed
      Service.find()
        .then((r) => res.send(r))
        .catch((err) => res.send(err));
});

router.post("/upload-image", (req, res, next) => {
  const recordId = req.query.recordId;
  const name = req.query.name;
  const imageFile = req.files[0];

  cloudinary.uploader
    .upload(imageFile.path)
    .then(async (imageData) => {
      await Service.findByIdAndUpdate(
        recordId,
        { $set: { [name]: imageData.secure_url } },
        { new: true }
      )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
          res.send(err);
        });
      return res.send(imageData);
    })
    .catch((err) => res.send(err));
});
router.post("/upload-main-image", (req, res, next) => {
  const recordId = req.query.recordId;
  const imageFile = req.files[0];

  cloudinary.uploader
    .upload(imageFile.path)
    .then(async (imageData) => {
      await Service.findByIdAndUpdate(
        recordId,
        { $set: { ["details.mainImage"]: imageData.secure_url } },
        { new: true }
      )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
          res.send(err);
        });
      return res.send(imageData);
    })
    .catch((err) => res.send(err));
});
module.exports = router;
