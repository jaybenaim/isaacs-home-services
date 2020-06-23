const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeroSchema = new Schema({
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

module.exports = Hero = mongoose.model("heros", HeroSchema);
