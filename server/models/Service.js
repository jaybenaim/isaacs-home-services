const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  title: {
    type: String,
    style: String,
    headingType: String,
    required: true,
  },
  subTitle: {
    type: String,
    style: String,
    headingType: String,
    required: true,
  },
  image: {
    type: String,
    size: String,
    style: String,
  },
  shortDescription: {
    type: String,
    style: String,
  },
  details: {
    heading: {
      type: String,
      style: String,
    },
    description: {
      type: String,
      style: String,
    },
    mainImage: {
      type: String,
      size: String,
      style: String,
    },
  },
});

module.exports = Service = mongoose.model("services", ServiceSchema);
