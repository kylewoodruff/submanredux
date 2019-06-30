var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var WatchlistSchema = new Schema({
 
  body: String
});

var Watchlist = mongoose.model("Watchlist", WatchlistSchema);

// Export the Note model
module.exports = Watchlist;