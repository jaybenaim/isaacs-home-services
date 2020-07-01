const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomeImages = new Schema({
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
  innerTitle: {
    type: String,
  },
  innerDetails: {
    type: String,
  },
});

module.exports = HomeImage = mongoose.model("homeImages", HomeImages);
