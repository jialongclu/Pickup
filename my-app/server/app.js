var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexControlller = require("./controllers/index");
var usersControlller = require("./controllers/users");
var signUpControlller = require("./controllers/signUp");
var signInControlller = require("./controllers/signIn");
var interactionsControlller = require("./controllers/interactionController");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexControlller);
app.use("/users", usersControlller);
app.use("/signUp", signUpControlller);
app.use("/signIn", signInControlller);
app.use("/interactions", interactionsControlller);

module.exports = app;
