const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/MovieDB"
);

const userSeed = [
  {
    email: "jayxmiller@gmail.com",
    googleId: "1234",
    facebookId: "394934",
    date: new Date(Date.now()),
  },
  {
    username: "kyle",
    googleId: "345",
    facebookId: "0930932",
    date: new Date(Date.now()),
  },
  {
    username: "Dante",
    googleId: "2837",
    facebookId: "890389",
      
    date: new Date(Date.now())
  },
  {
    username: "George",
    googleId: "982937",
    facebookId: "8938932",
      
    date: new Date(Date.now())
  }
]



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
