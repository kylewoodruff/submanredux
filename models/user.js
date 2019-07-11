const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  googleId: { type: String, required: false, unique: true },
  facebookId: {type:String, required: false, unique: true},
  date: { type: Date, default: Date.now },

  Subs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subs"
    }
  ],

  Watchlist: [
    {

      type: Schema.Types.ObjectId,

      ref: "Watchlist"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;