const mongoose = require("mongoose");
require("dotenv").config();
//  Connect to DB
const db = process.env.MONGO_URI;

// Mongo options

const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

// Connect to MongoDB
mongoose
  .connect(db, dbOptions)
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));
