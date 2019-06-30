const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");
const moment = require("moment");


var db = require("../../models");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/movieDB";
mongoose.connect(MONGODB_URI);
mongoose.Promise = Promise;

var PORT = process.env.PORT || 3001;

var app = express();



app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect("mongodb://localhost/movieDB", { useNewUrlParser: true });

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}
