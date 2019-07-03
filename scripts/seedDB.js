const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/MovieDB"
);

const userSeed = [
  {
    username: "jayxmiller",
    googleId: "1234",
    subscription: "itunes",
    date: new Date(Date.now()),
  },
  {
    username: "kyle",
    googleId: "345",
    subscription: "hulu",
    date: new Date(Date.now()),
  },
  {
    username: "Dante",
    googleId: "2837",
    subscription:
      "netflix",
    date: new Date(Date.now())
  },
  {
    username: "George",
    googleId: "982937",
    subscription:
      "HBO",
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
