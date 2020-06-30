const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  firebaseID: {
    type: String,
  },
  positionOnPage: {
    type: Number,
  },
  title: {
    type: String,

    required: true,
  },
  subTitle: {
    type: String,
  },
  beforeImage: { type: String },
  afterImage: { type: String },
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
