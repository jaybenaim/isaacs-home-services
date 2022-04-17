const express = require("express");
const router = express.Router();
const axios = require("axios");
const cloudinary = require("cloudinary");

const HomeImage = require("../../models/HomeImage");

// create homeImages from firebase data
router.get("/firebase", (req, res) => {
  axios
    .get("https://network-king-5740f.firebaseio.com/heroes.json")
    .then((response) => {
      const homeImages = response.data;
      const results = [];
      for (const id in homeImages) {
        console.log(homeImages[id]);
        results.push(homeImages[id]);
      }

      results.forEach((hero) => {
        const newHomeImage = new HomeImage(hero);
        setTimeout(() => {
          newHomeImage.save().catch((err) => console.log(err));
        }, 100);
      });
      res.send(results);
    });
});

router.get("/", (req, res) => {
  const { refresh } = req.query;
  refresh === "true"
    ? // Find all services in mongo
      HomeImage.find()
        .select("-__v -_id")
        .then((response) => {
          const homeImageFilter = [...new Set(response)];
          axios
            .delete("https://network-king-5740f.firebaseio.com/heroes.json")
            .then(() => {
              // Create each item in firebase
              homeImageFilter.forEach((hero) => {
                axios.post(
                  "https://network-king-5740f.firebaseio.com/heroes.json",
                  hero
                );
              });
            })
            .finally(() => res.send(homeImageFilter));
        })
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

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    console.log("id to delete", id);

    const deleteResponse = await HomeImage.deleteOne({ _id: id });

    res.send(deleteResponse);
  } catch (err) {
    console.log("err", err);
    return res.send(err);
  }
});

router.post("/upload-image", async (req, res, next) => {
  const recordId = req.query.recordId;
  const imageFile = req.files[0];

  console.log("recordId", recordId);
  console.log("imageFile", imageFile.originalFilename);

  await cloudinary.uploader
    .upload(imageFile.path)
    .then(async (imageData) => {
      console.log("image url", imageData.secure_url);
      const hero = await HomeImage.findByIdAndUpdate(
        { _id: recordId },
        { $set: { src: imageData.secure_url } },
        { new: true }
      );
      console.log("Updated hero", hero);

      return res.send(imageData);
    })
    .catch((err) => {
      console.log("cloudinary err", err);
      res.send(err);
    });
});

module.exports = router;
