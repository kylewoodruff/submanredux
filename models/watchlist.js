const mongoose = require('mongoose');


// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const WatchlistSchema = new Schema({

  body: String,
});

const Watchlist = mongoose.model('Watchlist', WatchlistSchema);

// Export the Note model
module.exports = Watchlist;
