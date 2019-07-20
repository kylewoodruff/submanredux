/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const routes = require('./routes');
const dontenv = require('dotenv').config();


const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/MovieDB',
);


app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
