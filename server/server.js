const createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const cors = require("cors");
const CONSTANTS = require("./constants");
const { PORT: port } = CONSTANTS;
const passport = require("passport");
const indexRouter = require("./routes");
const services = require("./routes/api/services");
const heroes = require("./routes/api/heroes");
const events = require("./routes/api/events");
const adminBro = require("./config/adminBro");
const AdminBroExpressjs = require("admin-bro-expressjs");
const bcrypt = require("bcrypt");
// const firebase = require("firebase");
const formData = require("express-form-data");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const cloudinary = require("cloudinary");
const User = require("./models/User");

require("dotenv").config();
require("./config/db");

const app = express();

// Start mongo connection

console.log(process.env.CLOUDINARY_KEY);
// Init cloudinary for image upload
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Admin Bro UI

// const adminRouter = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
//   authenticate: async (email, password) => {
//     try {
//       const user = await User.findOne({ email });
//       console.log("User", user);
//       if (user.role === "admin") {
//         const matched = await bcrypt.compare(password, user.password);
//         if (matched) {
//           return user;
//         }
//       }

//       return false;
//     } catch (err) {
//       console.log("error", err);
//       return false;
//     }
//   },
//   cookiePassword: process.env.SECRET,
// });

// // Enable to use without auth
const adminRouter = AdminBroExpressjs.buildRouter(adminBro);
app.use(adminBro.options.rootPath, adminRouter);
// Bodyparser middleware

app.use(bodyParser.json());
app.use(formData.parse());
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.resolve(__dirname, "build")));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api", indexRouter);
app.use("/api/users", users);
app.use("/api/services", services);
app.use("/api/heroes", heroes);
app.use("/api/events", events);

// app.get("*", (req, res) => {
//   res.sendFile("build/index.html", { root: __dirname });
// });
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// TODO Web Template Studio: Add your own error handler here.
if (process.env.NODE_ENV === "production") {
  // Do not send stack trace of error message when in production
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send("Error occurred while handling the request.");
  });
} else {
  // Log stack trace of error message while in development

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.log(err);
    res.send(err.message);
  });
}

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

module.exports = app;
