const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const Subs = new Schema({

  Name: { type: Array, required: true },
  cost: { type: String, require: true },
  dueDate: { type: Date, require: true },
  createDate: { type: Date, require: true },

});

// const Subs = mongoose.model('Subs', subsSchema);

module.exports = Subs;
