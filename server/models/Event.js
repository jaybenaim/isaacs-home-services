const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
  },
  allDay: {
    type: Boolean,
  },
  firebaseId: {
    type: String,
  },
});

module.exports = Event = mongoose.model("events", EventSchema);
