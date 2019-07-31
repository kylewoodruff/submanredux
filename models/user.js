const mongoose = require('mongoose');
const Show = require('./showSchema');
const Sub = require('./subsSchema');

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
  subs: [Sub],
  watchlist: [Show],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
