const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const cors = require("cors");
const CONSTANTS = require("./constants");
const { PORT: port } = CONSTANTS;
const passport = require("passport");
const indexRouter = require("./routes");
const services = require("./routes/api/services");
const adminBro = require("./config/adminBro");
const AdminBroExpressjs = require("admin-bro-expressjs");
const bcrypt = require("bcrypt");
const firebase = require("firebase");

require("dotenv").config();
require("./config/db");

const app = express();
// Firebase Admin
const config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);
const firebaseDB = firebase.database();

// Admin
const adminRouter = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ email });
    if (user.role === "admin") {
      const matched = await bcrypt.compare(password, user.password);
      if (matched) {
        return user;
      }
    }
    return false;
  },
  cookiePassword: process.env.SECRET,
});

app.use(adminBro.options.rootPath, adminRouter);
// Bodyparser middleware

app.use(bodyParser.json());

// Cors
const whitelist = [
  "https://jaybenaim.github.io",
  "http://localhost:3000",
  "http://localhost:5000",
  "http://localhost:5000",
];

const corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

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
