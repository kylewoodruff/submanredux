/* eslint-disable no-console */
const mongoose = require('mongoose');
const db = require('../models');


mongoose.connect(
  process.env.MONGODB_URI
  || 'mongodb://localhost/MovieDB',
);

const userSeed = [
  {
    email: 'jayxmiller@gmail.com',
    firstName: 'Jay',
    lastName: 'Miller',
    googleId: '1234',
    facebookId: '394934',
    date: new Date(Date.now()),
  },
  {
    email: 'kyle@test.com',
    firstName: 'Kyle',
    lastName: 'andrews',
    googleId: '345',
    facebookId: '0930932',
    date: new Date(Date.now()),
  },
  {
    email: 'Dante@test.com',
    firstName: 'Dante',
    lastName: 'Smith',
    googleId: '2837',
    facebookId: '890389',

    date: new Date(Date.now()),
  },
  {
    email: 'George@test.com',
    firstName: 'George',
    lastName: 'OBrien',
    googleId: '982937',
    facebookId: '8938932',

    date: new Date(Date.now()),
  },
];


db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
