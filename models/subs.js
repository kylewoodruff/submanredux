const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const subsSchema = new Schema({

  subscription: { type: Array, required: false },
});

const Subs = mongoose.model('Subs', subsSchema);

module.exports = Subs;
