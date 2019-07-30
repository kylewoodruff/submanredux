const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const Subs = new Schema({

  name: { type: Array, required: false },
  cost: { type: String, require: false },
  dueDate: { type: Date, require: false },
  createDate: { type: Date, require: false },

});

// const Subs = mongoose.model('Subs', subsSchema);

module.exports = Subs;
