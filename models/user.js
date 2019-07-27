const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: false, unique: true },
  lastName: { type: String, required: false, unique: true },
  password: { type: String, required: false, unique: false },
  id: { type: String, required: true, unique: true },
  img_Avatar: { type: String, required: false, unique: false },
  createdate: { type: Date, default: Date.now },

  subs: [
    {
      subscriptionName: { type: String },
      monthlyCost: { type: String },
      // Add due date

    },
  ],

  watchlist: [
    {
      movie_id: { type: String },
      title: { type: String },
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
