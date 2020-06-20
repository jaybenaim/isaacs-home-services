const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  firebaseID: {
    type: String,
  },
  title: {
    type: String,

    required: true,
  },
  subTitle: {
    type: String,
  },
  image: { type: String },
  shortDescription: {
    type: String,
  },
  details: {
    heading: {
      type: String,
    },
    description: {
      type: String,
    },
    mainImage: {
      type: String,
    },
  },
});

module.exports = Service = mongoose.model("services", ServiceSchema);
