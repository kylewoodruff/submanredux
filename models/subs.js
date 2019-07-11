const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subsSchema = new Schema({

  subscription: { type: Array, required: false},
  
});

const Subs = mongoose.model("Subs", subsSchema);

module.exports = Subs;