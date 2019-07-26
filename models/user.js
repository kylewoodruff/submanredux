const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true, unique: true },
  lastName: { type: String, required: true, unique: true },
  password: { type: String, required: false, unique: false },
  googleId: { type: String, required: false, unique: true },
  facebookId: { type: String, required: false, unique: true },
  createdate: { type: Date, default: Date.now },

  subs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Subs',
    },
  ],

  watchlist: [
    {

      type: Schema.Types.ObjectId,

      ref: 'Watchlist',
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
